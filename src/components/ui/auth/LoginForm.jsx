import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../axios";
import { useAuth } from "../../hooks/useAuth";
import useSessionCookie from "../../hooks/useSessionCookie";
import { validateEmail } from "../../provider/utils.js/validateEmail";
import FormInput from "../common/FormInput";

export default function LoginForm() {
  const { setAuth } = useAuth();
  const { setCookie } = useSessionCookie();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    // validate email format
    if (!validateEmail(data?.email)) {
      setError("email", {
        message: "Email is not valid",
      });
    } else {
      try {
        const response = await api.post("/auth/login", data);
        if (response.status === 200) {
          const { token, user } = response.data;
          if (token) {
            const authToken = token.accessToken;
            const refreshToken = token.refreshToken;
            setAuth({ user, authToken, refreshToken });
            setCookie(
              "auth",
              JSON.stringify({ user, authToken, refreshToken })
            );
            navigate("/");
          }
        }
      } catch (error) {
        console.error(error?.response?.data?.error);
        setError("root.random", {
          message: error?.response?.data?.error || error.message,
        });
      }
    }
  };

  return (
    <motion.form
      className={`w-3/4`}
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0.5, x: -20 }}
      animate={{
        opacity: 1,
        x: [-200, 0],
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <div className="mb-6">
        <FormInput label={"Email"} error={errors.email}>
          <input
            {...register("email", {
              required: "Email is Required",
            })}
            type="email"
            id="email"
            name="email"
            className="w-full p-3 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>
      <div className="mb-6">
        <FormInput label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 2,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            id="password"
            name="password"
            className="w-full p-3 dark:bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </FormInput>
      </div>
      {errors.root?.random?.message && (
        <p className="text-rose-600 text-center w-full">
          {errors.root.random.message}
        </p>
      )}
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        Don&#39;t have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </motion.form>
  );
}
