import { useState, useEffect } from "react";

export function useExtractInnerHtml(htmlContent, type) {
  const [innerHTML, setInnerHTML] = useState("");

  useEffect(() => {
    // Create a temporary div element
    const tempDiv = document.createElement("div");
    // Set the HTML content to the temporary div
    tempDiv.innerHTML = htmlContent.trim();
    // Find the button element
    const buttonElement = tempDiv.querySelector("button");
    console.log(buttonElement);
    // If button element is found, update state with its HTML content
    if (buttonElement) {
      setInnerHTML(buttonElement.outerHTML);
    }
  }, [htmlContent]);

  return innerHTML;
}

// Usage:
