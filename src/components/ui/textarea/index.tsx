"use client";

import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps): React.JSX.Element {
  return (
    <textarea
      className={cn(
        "text-foreground min-h-[140px] w-full rounded-2xl border border-(--line) bg-white/80 px-4 py-3 text-sm transition outline-none placeholder:text-(--muted) focus-visible:ring-2 focus-visible:ring-(--accent)/30",
        className,
      )}
      {...props}
    />
  );
}
