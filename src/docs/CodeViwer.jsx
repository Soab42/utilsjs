import { useEffect } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/intellij-light.css"; // Import a highlighting theme

// import useCopy from "../hooks/useCopy";
import CopyButton from "../components/ui/code/CopyButton";
import useCopy from "../hooks/useCopy";
// import CopyButton from "./CopyButton";
function CodeViewer({ text }) {
  const [copy, handleCopy, codeRef] = useCopy();

  useEffect(() => {
    hljs.highlightAll();
  }, [text]);

  return (
    <pre className="relative ring-1 ">
      <CopyButton copy={copy} handleCopy={handleCopy} />
      <code className={"language-jsx"} ref={codeRef}>
        {text}
      </code>
    </pre>
  );
}
export default CodeViewer;
