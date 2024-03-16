import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const usePortal = (rootId = "root") => {
  const mountElementRef = useRef(
    document.getElementById(rootId) || document.body
  );
  const elementRef = useRef(document.createElement("div"));

  useEffect(() => {
    const mountElement = mountElementRef.current;
    const elementDiv = elementRef.current;
    mountElement.appendChild(elementDiv);

    return () => {
      mountElement.removeChild(elementDiv);
    };
  }, [mountElementRef]);

  const PortalComponent = ({ children }) => {
    return createPortal(children, elementRef.current);
  };

  return PortalComponent;
};

export default usePortal;
