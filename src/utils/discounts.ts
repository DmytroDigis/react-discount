export function generateDynamicDiscountCodePart() {
  return Math.random().toString(36).slice(2, 7);
}
