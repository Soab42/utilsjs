// // MDXRenderer.jsx
// import { MDXProvider } from "@mdx-js/react";
// import hljs from "highlight.js";
// import React, { useEffect } from "react";
// import MDXContent from "./data/mdx/sample.mdx"; // Import your MDX file
// import "highlight.js/styles/docco.css"; // Import a highlighting theme
// import DynamicComponentApp from "./DynamicComponent";
// import Sample from "./data/mdx/Sample"; // Import your MDX file

// const components = {
//   Sample: Sample,
// };

// const MDXRenderer = () => {
//   useEffect(() => {
//     // load css for code generation
//     hljs.highlightAll();
//   }, []);

//   return (
//     <div className="prose p-4">
//       <MDXProvider components={components}>
//         <MDXContent />
//       </MDXProvider>
//       <DynamicComponentApp />
//     </div>
//   );
// };

// export default MDXRenderer;
import React from "react";

export default function Test() {
  return <div>Test</div>;
}
