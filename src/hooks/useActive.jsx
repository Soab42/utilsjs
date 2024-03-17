import { useState } from "react";

// for toggling true false state changes
const useActive = (initialState = false) => {
  const [active, setActive] = useState(initialState);
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
