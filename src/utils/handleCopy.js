export const handleCopy = (setCopy) => {
  const textToCopy = document.getElementById("code").innerText;
  navigator.clipboard.writeText(textToCopy);
  setCopy(true);
  setTimeout(() => {
    setCopy(false);
  }, 5000);
};
