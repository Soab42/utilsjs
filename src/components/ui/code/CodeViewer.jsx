import { useEffect } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/docco.css"; // Import a highlighting theme

import useCopy from "../../../hooks/useCopy";
import CopyButton from "./CopyButton";
function CodeViewer({ text }) {
  const [copy, handleCopy, codeRef] = useCopy();

  useEffect(() => {
    hljs.highlightAll();
  }, [text]);

  return (
    <pre className="relative ">
      <CopyButton copy={copy} handleCopy={handleCopy} />
      <code
        className={"language-javascript"}
        ref={codeRef}
        dangerouslySetInnerHTML={{ __html: text }}
      ></code>
    </pre>
  );
}
export default CodeViewer;
