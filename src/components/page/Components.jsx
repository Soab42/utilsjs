import React from "react";
import { componentsList } from "../../data/componentsType";
import { Link, useParams } from "react-router-dom";
import ComponentsType from "../catagory/components/ComponentsType";

export default function Components() {
  const params = useParams();

  return (
    <div className="flex border-x-2 h-[90vh] ">
      <div>
        <div className="w-full flex flex-col">
          <p className="font-bold text-center text-xl py-2">Components</p>
          <Link
            to={"/write"}
            className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
          >
            Add New
          </Link>
        </div>
        <div className="relative h-full overflow-y-scroll w-62 ">
          <ul className="flex flex-col p-2 rounded   ring-green-600/70 w-56">
            {componentsList.map((component) => {
              return (
                <li
                  className={`${
                    params && params?.name === getFreshenComponent(component)
                      ? "shadow-md ring-emerald-500 border-y border-green-600 rounded-sm"
                      : ""
                  } h-10 flex mt-1 items-center hover:bg-green-600/30 pl-2 border-b`}
                  key={component}
                >
                  <Link to={`/components/${getFreshenComponent(component)}`}>
                    {component}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="w-[80%] h-screen  p-4
      "
      >
        <ComponentsType />
      </div>
    </div>
  );
}

function getFreshenComponent(text) {
  return text.replace(/\s+/g, "-").toLowerCase();
}
