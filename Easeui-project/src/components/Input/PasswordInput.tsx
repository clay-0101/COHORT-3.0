import React, { useState } from "react";
import { Input, type InputProps } from "./Input";
import { cn } from "@/libs/utils";
import { Eye, EyeOff } from "lucide-react"; // or any icon lib

type Props = Omit<InputProps, "type">;

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [show, setShow] = useState(false);
    return (
      <div className="relative">
        <Input
          {...props}
          ref={ref}
          type={show ? "text" : "password"}
          className={cn("pr-10", props.className)}
        />
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={() => setShow((s) => !s)}
          className="absolute right-2 top-11 -translate-y-1/2 p-1 rounded"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";
