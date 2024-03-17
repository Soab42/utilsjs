import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import { TiClipboard, TiTick } from "react-icons/ti";
function CodeViewer({ text }) {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    const textToCopy = document.getElementById("code").innerText;
    navigator.clipboard.writeText(textToCopy);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [text]);

  return (
    <pre className="relative">
      <button
        className="absolute px-1 right-2 top-2  ring-1 gap-1 rounded-sm backdrop-blur z-50 "
        onClick={handleCopy}
      >
        {copy ? (
          <div className="flex justify-center items-center gap-1 p-1 w-24 text-sky-400">
            <TiTick />
            copied
          </div>
        ) : (
          <div className="flex justify-center items-center gap-1 p-1 w-24">
            <TiClipboard />
            copy
          </div>
        )}
      </button>
      <code
        className={`language-javascript text-xs`}
        id="code"
        dangerouslySetInnerHTML={{ __html: text }}
      ></code>
    </pre>
  );
}
export default CodeViewer;
