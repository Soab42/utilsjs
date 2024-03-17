import { motion } from "framer-motion";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import RegistrationForm from "../auth/RegistrationForm";
import RegistrationImage from "../auth/RegistrationImage";
export default function Registration() {
  useDynamicTitle("Registration");
  return (
    <motion.section className="container flex-center  w-full my-4 h-[77vh]">
      <motion.div className="mx-auto my-0 h-full xl:w-1/2  bg-[#030317]/10 backdrop-blur-md p-8 rounded-md  z-10  flex-center-col">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <RegistrationForm />
      </motion.div>
      <RegistrationImage />
    </motion.section>
  );
}
