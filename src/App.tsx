// import { useEffect, useState } from "react";
import { themeIcon } from "./components/Icons";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";
// import { useEffect } from "react";
import Footer from "./components/Footer";
// import About from "./components/About";
import Careers from "./components/Careers";

function App() {
  const theme = localStorage.getItem("isDarkMode");
  let [isToggled, toggle] = useToggleHook(theme !== "true");

  return (
    <div className={`${isToggled ? "" : "dark transition transform"} `}>
      <div
        className={`w-full h-full overflow-hidden bg-[#f2f2f2] dark:bg-[#1f1f23] dark:text-white `}
      >
        <header className="flex justify-between items-center h-12 w-full py-3 px-6 md:px-12 lg:px-32 mb-6 border-b shadow-sm border-gray-200 dark:border-gray-800">
          <div className="logo">CryptoSourcerers</div>
          <div className="navs space-x-6 lg:space-x-12 font-medium hidden md:inline-block">
            {["Roles", "Insights", "Learning", "News"].map((item) => (
              <a className="hover:text-gray-400  transition hover:cursor-pointer">
                {item}
              </a>
            ))}
          </div>
          <div className="ctaSection hidden md:flex items-center space-x-3">
            <div
              className="text-gray-400 transition hover:text-purple-600 dark:hover:text-amber-300"
              onClick={toggle}
            >
              {themeIcon}
            </div>
            <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-rose-500 to-pink-500 transition transform hover:scale-105 outline-none">
              Roleseeker
            </button>
            <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-indigo-500 to-purple-500 transition transform hover:scale-105 outline-none">
              Post a role
            </button>
          </div>
        </header>
        <div className="content min-h-screen px-6 md:px-12 lg:px-32">
          {/* <About /> */}
          <Careers />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
