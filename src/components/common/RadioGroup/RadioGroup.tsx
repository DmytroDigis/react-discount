import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import React from "react";

import { RadioButton } from "../RadioButton/RadioButton";

type RadioGroupOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  value: string | null;
  options: RadioGroupOption[];
  onChange: (value: string) => void;
};

export function RadioGroup({ options, value, onChange }: RadioGroupProps) {
  return (
    <HeadlessRadioGroup
      className="flex flex-wrap flex-col sm:flex-row w-full gap-x-2 gap-y-2"
      value={value}
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <RadioButton value={value} label={label} key={value} />
      ))}
    </HeadlessRadioGroup>
  );
}
