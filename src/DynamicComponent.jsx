import React, { useEffect, useState } from "react";

// Define a component that imports dynamically
const DynamicComponent = React.lazy(() => import("./data/mdx/Sample"));

// Define your content object
const content = {
  code: "javascript",
};

function DynamicComponentApp() {
  const [backgroundColor, setBackgroundColor] = useState("violet");

  // Function to handle changing background color
  const changeBackgroundColor = () => {
    setBackgroundColor("tomato");
  };

  return (
    <>
      {/* Dynamic code block */}
      <pre>
        <code className={content.code}>{`<DynamicComponent />`}</code>
      </pre>

      {/* JSX with dynamic background color */}
      <div style={{ backgroundColor: backgroundColor, padding: "1rem" }}>
        Try and change the background color to{" "}
        <button onClick={changeBackgroundColor}>tomato</button>.
      </div>

      {/* Render the Sample component */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </React.Suspense>
    </>
  );
}

export default DynamicComponentApp;
