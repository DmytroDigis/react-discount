export async function copyToClipboard(value?: string | number): Promise<void> {
  if (!value) {
    return;
  }
  if (navigator?.clipboard) {
    return navigator.clipboard.writeText(value.toString());
  } else {
    // Compatibility with old browsers
    const textField = document.createElement("textarea");
    textField.innerText = value.toString();
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
}
