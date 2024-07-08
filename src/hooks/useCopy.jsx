import { useRef, useState } from "react";

const useCopy = () => {
  const [copy, setCopy] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    if (codeRef.current) {
      const textToCopy = codeRef.current.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopy(true);
          setTimeout(() => {
            setCopy(false);
          }, 5000);
        })
        .catch((error) => {
          console.error("Failed to copy: ", error);
        });
    }
  };

  return [copy, handleCopy, codeRef];
};

export default useCopy;
