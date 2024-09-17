function copyToClipboard(element) {
  const text = element.getAttribute("data-copy");
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Copied: ${text}`);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
