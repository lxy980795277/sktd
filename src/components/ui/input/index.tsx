"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps): React.JSX.Element {
  return (
    <input
      className={cn(
        "text-foreground h-11 w-full rounded-2xl border border-(--line) bg-white/80 px-4 text-sm transition outline-none placeholder:text-(--muted) focus-visible:ring-2 focus-visible:ring-(--accent)/30",
        className,
      )}
      {...props}
    />
  );
}
