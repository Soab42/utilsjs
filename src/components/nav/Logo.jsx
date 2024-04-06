import React from "react";
import RotatingTitle from "./Title";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <RotatingTitle />
    </Link>
  );
}
