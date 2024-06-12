import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { useState } from "react";

import { copyToClipboard } from "../../../utils/clipboard";
import { generateDynamicDiscountCodePart } from "../../../utils/discounts";
import { Button } from "../../common/Button/Button";

export function DiscountCodeGenerator() {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const CopyButtonIcon = copied ? CheckIcon : DocumentDuplicateIcon;

  const generateCode = () => {
    const dynamicPart = generateDynamicDiscountCodePart();
    return `DISCOUNT${dynamicPart.toUpperCase()}`;
  };

  const onGenerateClick = () => {
    setCode(generateCode());
  };

  const onCopyClick = async () => {
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 400);
  };

  return (
    <div className="mt-6 ">
      <div className="mb-2">Discount Code Generator</div>
      <div className="flex flex-col-reverse sm:flex-row gap-x-2 gap-y-2">
        <Button onClick={onGenerateClick} className="flex justify-center items-center">
          Create Discount Code
        </Button>
        <div className="flex gap-x-2">
          <div
            className={clsx(
              "p-4 border-2 border-gray-100 rounded-lg min-w-[200px] h-[36px] truncate",
              "flex items-center justify-center flex-grow",
              { "text-gray-500": !code },
            )}
          >
            {code || "Code will be here"}
          </div>
          <Button
            onClick={onCopyClick}
            className={clsx("flex justify-center items-center", {
              "cursor-none pointer-events-none opacity-60": copied || !code,
            })}
            variant="outlined"
          >
            <CopyButtonIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
