import { themeIcon, warningIcon, removeIcon } from "./components/Icons";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import Content from "./components/Content";

const App = () => {
  const theme = localStorage.getItem("isDarkMode");
  let [isToggled, toggle] = useToggleHook(theme !== "true");

  return (
    <div className={`${isToggled ? "" : "dark transition transform"} `}>
      <div
        className={`w-full h-full overflow-hidden bg-[#f2f2f2] dark:bg-[#1f1f23] dark:text-white `}
      >
        <div className="bg-green-300 h-full sm:h-6 text-gray-800 text-xs flex flex-col sm:flex-row whitespace justify-between items-center px-4">
          <p className="flex items-center">
            <span className="mr-2">{warningIcon}</span>Always make sure the URL
            is{": "} <code className="mx-1">cryptosourcerers.co</code> -
            bookmark it to be safe.
          </p>
          <p className="flex items-center">
            For security purposes, disconnect your wallet manually when
            terminating your session. <span className="ml-1">{removeIcon}</span>
          </p>
        </div>
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
        <Content>
          <Careers />
        </Content>
        <Footer />
      </div>
    </div>
  );
};

export default App;
