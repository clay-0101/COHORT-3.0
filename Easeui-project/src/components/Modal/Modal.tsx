import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";

const modalVariants = cva(
  "fixed inset-0 flex items-center justify-center z-50 transition-all duration-300",
  {
    variants: {
      variant: {
        light:
          "bg-white text-gray-900 shadow-2xl border border-gray-200 hover:shadow-xl",
        dark: "bg-slate-900 text-white shadow-lg border border-slate-700 hover:shadow-xl",
        outline:
          "bg-transparent border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-gray-100 backdrop-blur-md",
      },
      size: {
        sm: "w-[90%] max-w-sm p-4",
        md: "w-[90%] max-w-md p-6",
        lg: "w-[90%] max-w-lg p-8",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  asChild?: boolean;
  isOpen?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  onDone?: () => void;
  doneText?: string;
  closeText?: string;
  children?: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      asChild = false,
      title,
      description,
      children,
      className,
      isOpen = false,
      onClose,
      onDone,
      doneText = "Done",
      closeText = "Close",
      variant,
      size,
      ...props
    },
    ref
  ) => {
    if (!isOpen) return null;
    const Comp = asChild ? Slot : "div";

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />

        <Comp
          ref={ref}
          className={cn(
            modalVariants({ variant, size }),
            "relative rounded-xl transform scale-100 transition-all duration-300 animate-fadeIn",
            className
          )}
          {...props}
        >
          <div>
            {title && (
              <h3 className="text-xl font-semibold mb-2 text-[inherit]">
                {title}
              </h3>
            )}

            {description && (
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-[inherit]">
                {description}
              </p>
            )}

            <div className="mb-4">{children}</div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={onClose}
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition",
                  variant === "dark"
                    ? "border border-slate-600 hover:bg-slate-700"
                    : "border border-gray-300 hover:bg-gray-100"
                )}
              >
                {closeText}
              </button>

              <button
                onClick={onDone}
                className={cn(
                  "px-4 py-2 rounded-md text-white font-medium transition",
                  variant === "dark"
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                )}
              >
                {doneText}
              </button>
            </div>
          </div>
        </Comp>
      </div>
    );
  }
);

Modal.displayName = "Modal";
export { Modal, modalVariants };
