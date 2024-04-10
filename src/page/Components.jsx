import React from "react";
// import useActive from "../../hooks/useActive";
import ComponentMarkup from "../docs/ComponentMarkup";
import ComponentsLeftBar from "../docs/ComponentsLeftBar";

export default function Components() {
  return (
    <div className="flex border-x-2 h-[90vh] w-full ">
      <ComponentsLeftBar />
      {/* content */}
      <div
        className="xl:w-[80%] h-full overflow-y-auto  xl:p-4  w-full mt-10 xl:mt-0
      "
      >
        <ComponentMarkup />
      </div>
    </div>
  );
}
