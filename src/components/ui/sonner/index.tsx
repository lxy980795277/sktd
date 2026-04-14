"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps): React.JSX.Element {
  return (
    <Sonner
      richColors
      toastOptions={{
        classNames: {
          toast:
            "border border-(--line) bg-(--surface) text-foreground shadow-[0_14px_40px_rgba(31,29,25,0.18)]",
          description: "text-(--muted)",
        },
      }}
      {...props}
    />
  );
}
