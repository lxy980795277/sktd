import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  details: string;
  company?: string;
};

const CONTACT_RECEIVER = "980795277@qq.com";
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requestRecords = new Map<string, number[]>();

const getClientIp = (request: Request): string => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();

    if (firstIp) {
      return firstIp;
    }
  }

  if (realIp) {
    return realIp;
  }

  return "unknown";
};

const isRateLimited = (clientIp: string): boolean => {
  const now = Date.now();
  const history = requestRecords.get(clientIp) ?? [];
  const freshHistory = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (freshHistory.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestRecords.set(clientIp, freshHistory);
    return true;
  }

  freshHistory.push(now);
  requestRecords.set(clientIp, freshHistory);
  return false;
};

const buildEmailText = (payload: ContactPayload, sourceUrl: string, clientIp: string): string => {
  const submittedAt = new Date().toISOString();

  return `Dear SKTD Team,

You have received a new contact inquiry from the official website.

Contact Details
- Name: ${payload.name}
- Phone: ${payload.phone}
- Email: ${payload.email}

Inquiry Details
${payload.details}

---
This message was submitted via the SKTD contact form.
Submission Time: ${submittedAt}
Source Page: ${sourceUrl}
Client IP: ${clientIp}`;
};

const validatePayload = (payload: Partial<ContactPayload>): string | null => {
  if (payload.company?.trim()) {
    return "Bot submission blocked.";
  }

  if (!payload.name?.trim()) {
    return "Name is required.";
  }

  if (!payload.phone?.trim()) {
    return "Phone is required.";
  }

  if (!payload.email?.trim()) {
    return "Email is required.";
  }

  if (!EMAIL_PATTERN.test(payload.email.trim())) {
    return "Email format is invalid.";
  }

  if (!payload.details?.trim()) {
    return "Details are required.";
  }

  if (payload.details.trim().length > 5000) {
    return "Details are too long.";
  }

  return null;
};

export async function POST(request: Request): Promise<Response> {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return Response.json(
      { message: "Too many requests. Please try again in one minute." },
      { status: 429 },
    );
  }

  const payload = (await request.json()) as Partial<ContactPayload>;
  const validationError = validatePayload(payload);

  if (validationError) {
    if (validationError === "Bot submission blocked.") {
      return Response.json({ success: true }, { status: 200 });
    }

    return Response.json({ message: validationError }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    return Response.json(
      {
        message:
          "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safePayload: ContactPayload = {
    name: payload.name!.trim(),
    phone: payload.phone!.trim(),
    email: payload.email!.trim(),
    details: payload.details!.trim(),
  };
  const sourceUrl = request.headers.get("referer") ?? "unknown";
  const emailText = buildEmailText(safePayload, sourceUrl, clientIp);

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: CONTACT_RECEIVER,
      subject: `[SKTD Contact Inquiry] ${safePayload.name} | ${safePayload.email}`,
      text: emailText,
      replyTo: safePayload.email,
    });
  } catch {
    return Response.json(
      { message: "Failed to send email. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ success: true }, { status: 200 });
}
