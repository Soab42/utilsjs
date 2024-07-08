// Variants for colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan"];

// Variants for sizes
const sizes = [10, 16, 20, 24, 36, 48, 56];

// Variants for button styles
const variants = [
  { label: "Primary", color: "blue" },
  { label: "Secondary", color: "gray" },
  { label: "Success", color: "green" },
  { label: "Warning", color: "orange" },
  { label: "Danger", color: "red" },
  { label: "Info", color: "cyan" },
  { label: "Dark", color: "black" },
];

// Mixed variants
const mixedVariants = [
  { bgColor: "green", color: "white", width: "4rem", height: "1.5rem" },
  { bgColor: "orange", color: "white", width: "5rem", height: "2rem" },
  { bgColor: "red", color: "white", width: "6rem", height: "2.2rem" },
  { bgColor: "cyan", color: "black", width: "7rem", height: "2.4rem" },
  { bgColor: "pink", color: "white", width: "8rem", height: "2.5rem" },
  { bgColor: "blue", color: "white", width: "9rem", height: "4em" },
  { bgColor: "gray", color: "white", width: "10rem", height: "4rem" },
];

export { colors, mixedVariants, sizes, variants };
