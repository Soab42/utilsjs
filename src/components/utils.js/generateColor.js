// Function to generate a color based on the author's name
export const generateColor = (str) => {
  // Simple hash function to generate a color from a string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = Math.abs(hash).toString(16).slice(0, 6);
  return `#${color.padStart(6, "0")}`;
};
