import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function LinkList() {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <Link to={"/"}>
        <li className={location.pathname === "/" ? "active" : ""}>home</li>
      </Link>
      <Link to={"/components"}>
        <li className={location.pathname.match("/components") ? "active" : ""}>
          components
        </li>
      </Link>
      <Link to={"/hooks"}>
        <li className={location.pathname.match("/hooks") ? "active" : ""}>
          hooks
        </li>
      </Link>
      <Link to={"/utils"}>
        <li className={location.pathname.match("/utils") ? "active" : ""}>
          utils
        </li>
      </Link>
      <Link to={"/tools"}>
        <li className={location.pathname.match("/tools") ? "active" : ""}>
          tools
        </li>
      </Link>
      <Link to={"/blog"}>
        <li className={location.pathname.match("/blog") ? "active" : ""}>
          blog
        </li>
      </Link>
    </>
  );
}
