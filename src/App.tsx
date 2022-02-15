import { menuIcon, themeIcon } from "./components/Icons";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";
import Footer from "./components/Footer";
import Content from "./components/Content";
import WarningBanner from "./components/WarningBanner";
import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LiveRolesPage from "./pages/LiveRolesPage";
import TestimonialPage from "./pages/TestimonialPage";

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
          className={`font-lato w-full h-full overflow-hidden bg-[#F3F6F9] dark:bg-[#1f1f23] dark:text-white `}
        >
          {banner === "false" ? (
            <WarningBanner handleBanner={handleBanner} />
          ) : null}
          <header className="flex justify-between items-center h-12 w-full py-3 px-6 md:px-12 lg:px-32 mb-6 border-b shadow border-gray-200 dark:border-gray-800">
            <Link to={"/"}>
              <div className="logo">CryptoSourcerers</div>
            </Link>
            <div className="navs space-x-6 lg:space-x-12 font-medium hidden md:inline-block">
              {["Roles", "Careers", "Insights", "Learning", "News"].map(
                (item) => (
                  <a
                    className="hover:text-gray-400  transition hover:cursor-pointer"
                    href="/"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="inline-block md:hidden  text-indigo-500">
              {menuIcon}
            </div>
            <div className="ctaSection hidden md:flex items-center space-x-3">
              <div
                className="text-gray-400 transition hover:text-purple-600 dark:hover:text-amber-300"
                onClick={toggle}
              >
                {themeIcon}
              </div>
              <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-rose-500 to-pink-500 transition transform hover:scale-105 outline-none">
                Roleseekers
              </button>
              <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-indigo-500 to-purple-500 transition transform hover:scale-105 outline-none">
                Recruiters
              </button>
            </div>
          </header>
          <Content>
            <Routes>
              <Route path="/careers" />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" />
              <Route path="/insights" />
              <Route path="/learning" />
              <Route path="/newsletter" />
              <Route path="/live-roles" element={<LiveRolesPage />} />
              <Route path="/testimonials" element={<TestimonialPage />} />
              <Route path="/legal" />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Content>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
