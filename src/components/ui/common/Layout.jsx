import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../nav/Footer";
import Navbar from "../nav/Navbar";
import Loading from "./loading";

export default function Layout() {
  return (
    <div className="overflow-hidden min-h-screen">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <main className="min-h-[88vh]  xl:mt-20 xl:mx-[10%]">
          <Outlet />
        </main>
        <footer className="backdrop-blur-lg w-full">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
}
