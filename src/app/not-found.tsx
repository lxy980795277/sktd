import Link from "next/link";

export default function NotFound(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-card max-w-xl rounded-[32px] border border-(--line) px-8 py-10 text-center shadow-[0_24px_80px_rgba(31,29,25,0.08)]">
        <p className="eyebrow mx-auto mb-5">404</p>
        <h1 className="section-title text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-(--muted) sm:text-base">
          The page you are looking for is unavailable. Please return to the SKTD homepage.
        </p>
        <Link
          href="/en/home"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong)"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
