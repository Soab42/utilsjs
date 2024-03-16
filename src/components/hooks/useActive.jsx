import { useState } from "react";

// for toggling true false state changes
const useActive = (initialState) => {
  const [active, setActive] = useState(initialState || false);
  const handleActive = (value) => {
    if (typeof value === "boolean") {
      setActive(value);
    } else {
      setActive(!active);
    }
  };

  return [active, handleActive];
};

export default useActive;
