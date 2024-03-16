import { useState } from "react";

export function useActive() {
  const [active, setActive] = useState(false);

  const handleIsActive = (value) => {
    if (typeof value === "boolean") {
      setActive(value || !active);
    } else {
      console.error("Invalid value type. Expected boolean.");
    }
  };

  return { active, handleIsActive };
}
