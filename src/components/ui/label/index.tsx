"use client";

import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps): React.JSX.Element {
  return (
    <label
      className={cn("text-sm font-semibold tracking-[0.08em] text-foreground uppercase", className)}
      {...props}
    />
  );
}
