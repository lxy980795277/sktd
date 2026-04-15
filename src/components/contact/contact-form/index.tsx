"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactContent } from "@/i18n/contact-content";

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  details: string;
  company: string;
};

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  details: "",
  company: "",
};

type ContactFormProps = {
  content: ContactContent["form"];
};

export function ContactForm({ content }: ContactFormProps): React.JSX.Element {
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof ContactFormState, value: string): void => {
    setFormState((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const result = (await response.json()) as { message?: string };
        throw new Error(result.message ?? content.errorMessage);
      }

      toast.success(content.successMessage);
      setFormState(INITIAL_FORM_STATE);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : content.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{content.nameLabel}</Label>
          <Input
            id="contact-name"
            name="name"
            value={formState.name}
            onChange={(event) => handleFieldChange("name", event.target.value)}
            placeholder={content.namePlaceholder}
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">{content.phoneLabel}</Label>
          <Input
            id="contact-phone"
            name="phone"
            value={formState.phone}
            onChange={(event) => handleFieldChange("phone", event.target.value)}
            placeholder={content.phonePlaceholder}
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">{content.emailLabel}</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={formState.email}
          onChange={(event) => handleFieldChange("email", event.target.value)}
          placeholder={content.emailPlaceholder}
          autoComplete="email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-details">{content.detailsLabel}</Label>
        <Textarea
          id="contact-details"
          name="details"
          className="min-h-[104px] resize-none sm:min-h-[116px]"
          value={formState.details}
          onChange={(event) => handleFieldChange("details", event.target.value)}
          placeholder={content.detailsPlaceholder}
          required
        />
      </div>

      <div className="hidden" aria-hidden>
        <Label htmlFor="contact-company">Company</Label>
        <Input
          id="contact-company"
          name="company"
          value={formState.company}
          onChange={(event) => handleFieldChange("company", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-10 min-w-[152px] sm:h-11 sm:min-w-[168px]"
        >
          {isSubmitting ? content.submittingLabel : content.submitLabel}
        </Button>
      </div>
    </form>
  );
}
