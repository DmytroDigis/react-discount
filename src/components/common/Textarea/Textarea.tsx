import { Description, Field, Label, Textarea as HeadlessTextarea } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subtitle?: string | null;
}

export function Textarea(props: TextareaProps) {
  return (
    <Field className={props.className}>
      <Label className="text-sm/6 font-medium">{props.label}</Label>
      {props.subtitle && <Description className="text-sm/6">{props.subtitle}</Description>}
      <HeadlessTextarea
        {...props}
        className={clsx(
          "mt-3 block w-full rounded-lg bg-white/50 py-1.5 px-3 text-sm/6 border-2 border-gray/200",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400",
        )}
      />
    </Field>
  );
}
