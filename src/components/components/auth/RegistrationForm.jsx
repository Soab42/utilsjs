import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../common/FormInput";

import axios from "axios";
export default function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");
  const onSubmit = async (formData) => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0.5, x: -20 }}
      animate={{
        opacity: 1,
        x: [200, 0],
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      autoComplete="off"
      className="w-full"
    >
      <div className="xl:mb-6 mb-3">
        <FormInput label={"First Name *"} error={errors.firstName}>
          <input
            {...register("firstName", { required: "First Name is required" })}
            type="text"
            id="firstName"
            name="firstName"
            className="w-full xl:p-3 p-2 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>
      <div className="xl:mb-6 mb-3">
        <FormInput label={"Last Name *"} error={errors.lastName}>
          <input
            {...register("lastName", { required: "Last Name is required" })}
            type="text"
            id="lastName"
            name="lastName"
            className="w-full xl:p-3 p-2 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>
      <div className="xl:mb-6 mb-3">
        <FormInput label={"Email *"} error={errors.email}>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            id="email"
            name="email"
            className="w-full xl:p-3 p-2 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>
      <div className="xl:mb-6 mb-3">
        <FormInput label={"Password *"} error={errors.password}>
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            id="password"
            name="password"
            className="w-full xl:p-3 p-2 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>
      <div className="xl:mb-6 mb-3">
        <FormInput label={"Confirm Password *"} error={errors.cpassword}>
          <input
            {...register("cpassword", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            id="cpassword"
            name="cpassword"
            className="w-full xl:p-3 p-2 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>

      <div className="xl:mb-6 mb-3 capitalize">
        {errors.root?.random?.message && (
          <p className="text-rose-600 mb-2 text-center w-full">
            {errors.root.random.message}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Create Account
        </button>
      </div>
      <p className="text-center">
        Already have account?
        <Link to="/login" className="text-indigo-600 hover:underline px-2">
          Login
        </Link>
      </p>
    </motion.form>
  );
}
