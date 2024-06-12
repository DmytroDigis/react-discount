import { Button as HeadlessButton } from "@headlessui/react";
import { clsx } from "clsx";
import React from "react";

export type ButtonVariant = "solid" | "outlined";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ children, className, variant = "solid", ...props }: ButtonProps) {
  return (
    <HeadlessButton
      {...props}
      className={clsx(
        "inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold",
        {
          "bg-gray-700 text-white shadow-inner shadow-white/10": variant === "solid",
          "bg-transparent text-gray-500 outline outline-1 outline-gray-400": variant === "outlined",
        },
        {
          "data-[focus]:outline-gray-700 data-[focus]:outline-1": variant === "solid",
          "data-[focus]:outline-gray-500 data-[focus]:outline-2": variant === "outlined",
        },
        {
          "data-[hover]:bg-gray-600 data-[open]:bg-gray-700": variant === "solid",
          "data-[hover]:bg-gray-100 data-[open]:bg-transparent": variant === "outlined",
        },
        className,
      )}
    >
      {children}
    </HeadlessButton>
  );
}
