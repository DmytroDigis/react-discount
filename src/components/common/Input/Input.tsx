import { Description, Field, Input as HeadlessInput, Label } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subtitle?: string | null;
  hasError?: boolean;
}

export function Input(props: InputProps) {
  return (
    <Field className={props.className}>
      <Label className="text-sm/6 font-medium">{props.label}</Label>
      {props.subtitle && (
        <Description className={clsx("text-sm/6", { "text-red-500": props.hasError })}>{props.subtitle}</Description>
      )}
      <HeadlessInput
        {...props}
        className={clsx("mt-1 block w-full rounded-lg bg-white/50 py-1.5 px-3 text-sm/6 border-2 border-gray/200", {
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400":
            !props.hasError,
          "outline outline-2 -outline-offset-2 outline-red-400": props.hasError,
        })}
      />
    </Field>
  );
}
