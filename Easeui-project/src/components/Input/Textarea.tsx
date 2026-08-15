import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const textareaCls = cva(
  "w-full rounded-md border px-3 py-2 resize-y focus:outline-none transition",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, size, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <textarea
          ref={ref}
          className={cn(textareaCls({ size }), className)}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
