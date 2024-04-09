import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="dark:bg-[#030317] dark:text-white/80  text-black flex flex-col items-center w-full  relative duration-500">
      <Nav />
      <main className="w-full flex justify-center items-center">
        <Outlet />
      </main>
      <div className="w-full text-white border-t border-slate-800 mt-4">
        <Footer />
      </div>
    </div>
  );
}
