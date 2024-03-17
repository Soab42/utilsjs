import ErrorSvg from "../../assets/icons/error.png";
const Error = ({ error = "Oops! Something is Wrong!" }) => {
  return (
    <div className="relative w-full h-full min-h-[79vh] flex-center">
      <div className="w-full">
        <p className=" p-5 rounded-full text-xl text-rose-400 text-center font-bold">
          {error}
        </p>
        <img src={ErrorSvg} alt="error" />
      </div>
    </div>
  );
};

export default Error;
