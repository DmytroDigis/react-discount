import { Radio } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIconOutline } from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import React from "react";

interface RadioButtonProps {
  value: string;
  label: string;
  className?: string;
}

export function RadioButton({ value, label, className }: RadioButtonProps) {
  return (
    <Radio value={value} className={className}>
      {({ checked }) => {
        const Icon = checked ? CheckCircleIconSolid : CheckCircleIconOutline;

        return (
          <div
            className={clsx(
              "p-4 cursor-pointer flex justify-center items-start border-[1px] border-gray-200 rounded-lg",
              {
                "bg-gray-200": checked,
              },
            )}
          >
            <Icon className="h-6 w-6 mr-1" />
            {label}
          </div>
        );
      }}
    </Radio>
  );
}
