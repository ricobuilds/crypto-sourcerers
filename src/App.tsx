import { menuIcon, themeIcon } from "./components/Icons";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";
import Footer from "./components/Footer";
import Content from "./components/Content";
import WarningBanner from "./components/WarningBanner";
import { useEffect, useState } from "react";
import About from "./pages/About";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LiveRoles from "./pages/LiveRoles";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import { Helmet } from "react-helmet-async";
import Login from "./pages/Login";
import Bounties from "./pages/Bounties";

const App = () => {
  const theme = localStorage.getItem("isDarkMode");
  let [isToggled, toggle] = useToggleHook(theme !== "true");

  let [banner, setBanner] = useState<string>(
    `${localStorage.getItem("isBannerHidden")}`
  );
  let hasBanner = localStorage.getItem("isBannerHidden");
  // console.log(banner);

  const handleBanner = (): void => {
    localStorage.setItem("isBannerHidden", "true");
    setBanner(`${localStorage.getItem("isBannerHidden")}`);
  };

  // getters
  useEffect(() => {
    if (!hasBanner) {
      localStorage.setItem("isBannerHidden", "false");
      let temp = localStorage.getItem("isBannerHidden");
      setBanner(`${temp}`);
    } else {
      setBanner(`${localStorage.getItem("isBannerHidden")}`);
      hasBanner = localStorage.getItem("isBannerHidden");
    }
  }, []);

  // setters
  useEffect(() => {
    hasBanner = localStorage.getItem("isBannerHidden");
  }, [banner]);

  return (
    <Router>
      <div className={`${isToggled ? "" : "dark transition transform"} `}>
        <div
          className={`font-lato w-full h-full overflow-hidden bg-[#F3F6F9] bg-gradient-to-tr dark:from-[#060508] dark:to-[#1a1a1c] dark:text-white `}
        >
          {banner === "false" ? (
            <WarningBanner handleBanner={handleBanner} />
          ) : null}
          <Helmet>
            <title>
              CryptoSourcerers - The World's #1 Source for Blockchain Talent.
            </title>
          </Helmet>
          <header className=" flex justify-between items-center h-12 w-full py-3 px-6 md:px-12 lg:px-32 mb-6 border-b border-gray-200 dark:border-gray-800">
            <Link to={"/"}>
              <div className="logo">Crypto Sourcerers</div>
            </Link>
            <div className="navs space-x-6 lg:space-x-12 font-medium hidden md:inline-block">
              {["Careers", "Learning", "About"].map((item) => (
                <a
                  className="hover:text-gray-400  transition hover:cursor-pointer"
                  href={`${item.toLocaleLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="inline-block md:hidden  text-[#ed194a]">
              {menuIcon}
            </div>
            <div className="ctaSection hidden md:flex items-center space-x-3">
              <div
                className="text-gray-400 transition hover:text-purple-600 dark:hover:text-amber-300"
                onClick={toggle}
              >
                {themeIcon}
              </div>
              {/* change the local language */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                    id="options-menu"
                  >
                    Lengua
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                  </button>
                </div>
                <div className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span className="flex items-center gap-x-1">
                        <span>Español </span>
                        <span>
                          <img
                            alt="Spain"
                            className="w-5 h-5"
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
                          />
                        </span>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span className="flex items-center gap-x-1">
                        <span>English</span>
                        <img
                          alt="England"
                          className="w-5 h-5"
                          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                        />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span className="flex items-center gap-x-1">
                        <span>Portugues</span>
                        <img
                          alt="Brazil"
                          className="w-5 h-5"
                          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
                        />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span className="flex items-center gap-x-1">
                        <span>Italian</span>
                        <img
                          alt="Italian"
                          className="w-5 h-5"
                          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg"
                        />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span className="flex items-center gap-x-1">
                        <span>German</span>
                        <img
                          alt="Italian"
                          className="w-5 h-5"
                          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <Link to={"/"}>
                <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-[#ed194a] to-pink-500">
                  LIVE SOON
                </button>
              </Link>
            </div>
          </header>
          <Content>
            <Routes>
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" />
              <Route path="/insights" element={<Insights />} />
              <Route path="/learning" />
              <Route path="/roles" element={<LiveRoles />} />
              <Route path="/bounties" element={<Bounties />} />
              <Route path="/legal" />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
