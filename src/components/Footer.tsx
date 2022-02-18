import { Link } from "react-router-dom";
import { etherIcon, maticIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-center space-y-4 sm:space-y-0 space-x-3 flex flex-col sm:flex-row justify-center items-center h-full w-full py-24 px-4">
      <div className="logo">© 2022 Crypto Sourcerers, All rights reserved</div>
      <div className="catchphrase">
        The World's #1 Source for Blockchain Talent.
      </div>
      <div className="bmakbw flex items-center space-x-1">
        <span className="fill-indigo-500 w-5 h-5 transform transition hover:scale-105">
          {maticIcon}{" "}
        </span>{" "}
        <span className="text-sky-500 transform transition hover:scale-105">
          {etherIcon}
        </span>{" "}
        BuyMeAKinderBuenoWhite
      </div>
      <div className="navs grid grid-cols-2 lg:grid-cols-3 gap-x-4">
        <Link to={"/careers"}>
          <span className="hover:text-gray-400 transition outline-none">
            Careers
          </span>
        </Link>
        <Link to={"about"}>
          <span className="hover:text-gray-400 transition outline-none">
            About
          </span>
        </Link>
        <a
          target={`_blank`}
          href="https://twitter.com/cryptosourcers"
          className="hover:text-gray-400 transition outline-none"
        >
          Twitter
        </a>

        <Link to={"/insights"}>
          <span className="hover:text-gray-400 transition outline-none">
            Insights
          </span>
        </Link>
        <span className="hover:text-gray-400 transition outline-none">
          Learning
        </span>
        <a
          target={`_blank`}
          href="https://moralis.io/"
          className="hover:text-gray-400 transition outline-none"
        >
          Moralis
        </a>

        <Link to={"/newsletter"}>
          <span className="hover:text-gray-400 transition outline-none">
            Newsletter
          </span>
        </Link>
        <Link to={"/legal"}>
          <span className="hover:text-gray-400 transition outline-none">
            Legal
          </span>
        </Link>
        <Link to={"/contact"}>
          <span className="hover:text-gray-400 transition outline-none">
            Contact
          </span>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
