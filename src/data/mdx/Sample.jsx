import React from "react";

export const content = {
  code: `
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
    </div>
  );
};`,
  languages: "js",
};

export default function Sample() {
  return <div>sample</div>;
}
