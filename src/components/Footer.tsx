import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-center space-y-4 sm:space-y-0 sm:space-x-12 flex flex-col sm:flex-row justify-center items-center h-full w-full py-24 px-12">
      <div className="logo">© 2022 Crypto Sourcerers, All rights reserved</div>
      <div className="catchphrase">
        The World's #1 Source for Blockchain Talent.
      </div>
      <div className="bmakbw">BuyMeAKinderBuenoWhite</div>
      <div className="navs grid grid-cols-3 lg:grid-cols-4 gap-x-4">
        <Link to={"/careers"}>
          <span className="hover:text-gray-400 transition">Careers</span>
        </Link>
        <Link to={"about"}>
          <span className="hover:text-gray-400 transition">About</span>
        </Link>
        <Link to={"/news"}>
          <span className="hover:text-gray-400 transition">News</span>
        </Link>
        <a
          target={`_blank`}
          href="https://twitter.com/cryptosourcers"
          className="hover:text-gray-400 transition"
        >
          Twitter
        </a>

        <Link to={"/insights"}>
          <span className="hover:text-gray-400 transition">Insights</span>
        </Link>
        <span className="hover:text-gray-400 transition">Learning</span>
        <span className="hover:text-gray-400 transition">Terms</span>
        <a
          target={`_blank`}
          href="https://moralis.io/"
          className="hover:text-gray-400 transition"
        >
          Moralis
        </a>

        <Link to={"/newsletter"}>
          <span className="hover:text-gray-400 transition">Newsletter</span>
        </Link>
        <Link to={"/testimonials"}>
          <span className="hover:text-gray-400 transition">Testimonials</span>
        </Link>
        <Link to={"/legal"}>
          <span className="hover:text-gray-400 transition">Legal</span>
        </Link>
        <Link to={"/contact"}>
          <span className="hover:text-gray-400 transition">Contact</span>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
