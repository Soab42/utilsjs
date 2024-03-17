import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../nav/Footer";

export default function Layout() {
  return (
    <div className="overflow-hidden min-h-screen">
      <nav>
        <Navbar />
      </nav>

      <main className="min-h-[88vh] mt-2 xl:mx-[10%]">
        <Outlet />
      </main>
      <footer className="backdrop-blur-lg w-full">
        <Footer />
      </footer>
    </div>
  );
}
