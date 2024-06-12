import { ChangeEventHandler, useMemo, useState } from "react";

import { Input } from "../../common/Input/Input";

const DISCOUNT_REGEX = /^DISCOUNT[A-Za-z0-9]*$/;
const VALIDATION_ERROR_TEXT = "Invalid discount code format.";

export function DiscountCodeInput() {
  const [discountCode, setDiscountCode] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setDiscountCode(e.target.value);
  const validateDiscount = (str: string) => DISCOUNT_REGEX.test(str);
  const validDiscount = useMemo(() => (discountCode ? validateDiscount(discountCode) : true), [discountCode]);

  return (
    <Input
      value={discountCode}
      onChange={onChange}
      label="Discount code"
      className="mt-6"
      hasError={!validDiscount}
      subtitle={!validDiscount ? VALIDATION_ERROR_TEXT : null}
    />
  );
}
