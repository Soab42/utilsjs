import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../nav/Footer";
import Navbar from "../nav/Navbar";
import Notify from "../notify/Notify";
import Loading from "./Loading";
import NotifyContextProvider from "../../../contexts/NotifyContext";
export default function Layout() {
  return (
    <NotifyContextProvider>
      <div className="fixed  w-fit z-[1000] top-20">
        <Notify />
      </div>
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
    </NotifyContextProvider>
  );
}
