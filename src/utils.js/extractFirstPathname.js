// utils.js

// Function to extract the '/hooks' part from the given pathname
export function extractFirstPathname(pathname) {
  console.log(pathname);
  const parts = pathname?.split("/");
  return parts[1]; // Return null if '/hooks' part is not found or is the last part
}
