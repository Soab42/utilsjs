import { MDXProvider } from "@mdx-js/react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import { createElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/dynamicImport";

// Define a fallback components object
const components = {
  em: function (properties) {
    return createElement("i", properties);
  },
};

const ComponentMarkup = () => {
  const [dynamicComponent, setDynamicComponent] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    // Load CSS for code highlighting
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    async function getComponent() {
      // Fetch the dynamic component asynchronously
      hljs.highlightAll();
      const component = await getData(name && name);
      setDynamicComponent(createElement(component));
    }
    getComponent();
  }, [name]);

  // console.log(dynamicComponent); // For debugging purposes

  return (
    <div className="prose p-4 w-full h-full ">
      <MDXProvider components={components}>
        {/* Render the dynamic component */}
        {dynamicComponent && dynamicComponent}
      </MDXProvider>
    </div>
  );
};

export default ComponentMarkup;
