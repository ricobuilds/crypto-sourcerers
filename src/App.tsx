// import { useEffect, useState } from "react";
import { themeIcon } from "./components/Icons";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";
import { useEffect } from "react";

function App() {
  const theme = localStorage.getItem("isDarkMode");
  let [isToggled, toggle] = useToggleHook(theme !== "true");

  useEffect(() => {
    if (theme) {
      return;
    } else {
      toggle();
    }
  }, []);
  return (
    <div className={`${isToggled ? "" : "dark transition transform"} `}>
      <div
        className={`header w-full h-full overflow-hidden bg-[#f2f2f2] dark:bg-[#1f1f23] dark:text-white `}
      >
        <header className="flex justify-between items-center h-12 w-full py-3 px-12 mb-6 border-b shadow-sm border-gray-200 dark:border-gray-800">
          <div className="logo">CryptoSourcerers</div>
          <div className="navs space-x-12 font-medium">
            {["Insights", "Learning", "News"].map((item) => (
              <a className="hover:text-gray-300 transition hover:cursor-pointer">
                {item}
              </a>
            ))}
          </div>
          <div className="ctaSection flex items-center space-x-3">
            <div
              className="text-gray-400 transition hover:text-purple-600 dark:hover:text-amber-300"
              onClick={toggle}
            >
              {themeIcon}
            </div>
            <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-indigo-500 to-purple-500 transition transform hover:scale-105 outline-none">
              Post a role
            </button>
          </div>
        </header>
        <div className="content min-h-screen px-12 font-medium">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full text-green-500">hey</div>
            <div className="w-full text-emerald-500">hey</div>
            <div className="w-full text-teal-500">hey</div>
            <div className="w-full text-rose-500">hey</div>
            <div className="w-full text-indigo-500">hey</div>
            <div className="w-full text-fuchsia-500">hey</div>
            <div className="w-full text-amber-500">hey</div>
          </div>
        </div>
        <footer className="footer bg-black text-white space-x-12 flex justify-center items-center h-12 w-full py-24 px-12">
          <div className="logo">2022 © Crypto Sourcerers</div>
          <div className="catchphrase">
            The World's #1 Source for Blockchain Talent.
          </div>
          <div className="navs grid grid-cols-4 gap-x-4">
            {[
              "Salaries",
              "Learning",
              "About",
              "Contact",
              "Terms",
              "Privacy",
              "Help",
              "FAQ",
              "Blog",
              "Careers",
              "Press",
              "API",
            ].map((item) => (
              <span className="hover:text-gray-400 transition">{item}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
