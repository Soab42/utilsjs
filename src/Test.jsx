// MDXRenderer.jsx
import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXContent from "./data/mdx/sample.mdx"; // Import your MDX file
import hljs from "highlight.js";
// import "highlight.js/styles/github.css"; // Import a highlighting theme
import "highlight.js/styles/docco.css"; // Import a highlighting theme
import Sample from "./data/mdx/Sample"; // Import your MDX file
import DynamicComponentApp from "./DynamicComponent";

const components = {
  Sample: Sample,
};

const MDXRenderer = () => {
  useEffect(() => {
    // load css for code generation
    hljs.highlightAll();
  }, []);

  return (
    <div className="prose p-4">
      <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider>
      <DynamicComponentApp />
    </div>
  );
};

export default MDXRenderer;
