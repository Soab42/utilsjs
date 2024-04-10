const ButtonComponent = ({ variant = {} }) => {
  return (
    <button
      className={`rounded-md p-1 text-center hover:brightness-90 duration-300`}
      style={{
        backgroundColor: variant.bgColor,
        width: variant.width,
        height: variant.height,
        color: variant.color || "black",
      }}
    >
      Click me
    </button>
  );
};

const buttonContent = `
<button className="rounded-md p-1 bg-blue-500 text-center hover:brightness-90 duration-300 h-4 w-10">
  Click me
</button>

`;

export { ButtonComponent, buttonContent };
