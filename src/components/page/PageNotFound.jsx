import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function PageNotFound() {
  return (
    <div className="w-screen h-screen ">
      <div className="background-container">
        <motion.div
          className="background-gradient flex flex-col justify-center items-center duration-1000"
          animate={{ backgroundPosition: "200% 0%" }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 5 }}
        >
          <div className="text-5xl">404 | Page Not Found</div>
          <div className="mt-20 text-2xl  ">
            <p>
              Back to{" "}
              <Link className="font-bold" to={"/"}>
                Home
              </Link>{" "}
              Page
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
