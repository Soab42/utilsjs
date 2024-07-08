export default function FormInput({ children, label, error }) {
  // console.log(error);
  return (
    <div className="flex flex-col justify-between">
      {label && (
        <label htmlFor="" className="block mb-2">
          {label}
        </label>
      )}
      <div className={error ? "ring-1 rounded ring-red-400" : ""}>
        {children}
      </div>
      {error && (
        <div className="px-2 text-rose-400 text-sm">* {error.message}</div>
      )}
    </div>
  );
}
