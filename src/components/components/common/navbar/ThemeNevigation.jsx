// import NightLogo from "../../../assets/night.svg";
import DayLogo from "../../../assets/day.svg";
import { useTheme } from "../../../hooks/useTheme";

// import Logo from "../public/Untitled.png";
function ThemeNevigation() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="">
      <button
        className="flex gap-2 justify-center items-center p-1 rounded-full duration-700 size-10 shadow-sm shadow-black dark:shadow-lg dark:shadow-pink-600/60 bg-lime-500/10 dark:bg-sky-600/10  overflow-hidden text-lg cursor-pointer"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        {theme !== "dark" ? (
          <p className={"moon"}>🌙</p>
        ) : (
          <img src={DayLogo} alt="day" className="w-5 sun" />
        )}
      </button>
    </div>
  );
}

export default ThemeNevigation;
