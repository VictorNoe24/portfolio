import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

interface DialogProps {
  triggerLabel: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Dialog({
  triggerLabel,
  title,
  description,
  children
}: DialogProps) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        {triggerLabel}
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[min(90vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-2xl focus-visible:outline-none">
          <div className="space-y-2">
            <DialogPrimitive.Title className="text-lg font-semibold">
              {title}
            </DialogPrimitive.Title>

            {description ? (
              <DialogPrimitive.Description className="text-sm text-muted-foreground">
                {description}
              </DialogPrimitive.Description>
            ) : null}
          </div>

          <div className="mt-4">{children}</div>

          <DialogPrimitive.Close className="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Close
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
