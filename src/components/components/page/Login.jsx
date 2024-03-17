import { motion } from "framer-motion";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import { pageVariants } from "../animated/variants";
import LoginForm from "../auth/LoginForm";
import LoginImage from "../auth/LoginImage";
<title>Login | Learn with Sumit</title>;

export default function Login() {
  useDynamicTitle("login");
  return (
    <motion.section
      className="container flex-center relative my-4 h-[77vh]"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* <!-- Login Form into a box center of the page --> */}

      <LoginImage />

      <div className="mx-auto my-0 h-full xl:w-1/2  bg-[#030317]/10 backdrop-blur-md p-8 rounded-md  z-10  flex-center-col">
        <h2 className="text-2xl font-bold mb-6 text-center ">Login</h2>
        <LoginForm />
      </div>
    </motion.section>
  );
}
