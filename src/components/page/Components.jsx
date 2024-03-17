import React from "react";
import { componentsList } from "../../data/componentsType";
import { Link, useParams } from "react-router-dom";

export default function Components() {
  const params = useParams();

  return (
    <div className="flex border-x-2 min-h-[90vh] p-5">
      <ul className="flex flex-col mr-4 p-2 rounded h-full ring-1 ring-green-600/70  w-[15%]">
        <Link
          to={"/write"}
          className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
        >
          Add New
        </Link>
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
      Components
    </div>
  );
}

function getFreshenComponent(text) {
  return text.replace(/\s+/g, "-");
}
