const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-center space-y-4 sm:space-y-0 sm:space-x-12 flex flex-col sm:flex-row justify-center items-center h-full w-full py-24 px-12">
      <div className="logo">© 2022 Crypto Sourcerers</div>
      <div className="catchphrase">
        The World's #1 Source for Blockchain Talent.
      </div>
      <div className="navs grid grid-cols-3 lg:grid-cols-4 gap-x-4">
        <span className="hover:text-gray-400 transition">Careers</span>
        <span className="hover:text-gray-400 transition">About</span>
        <span className="hover:text-gray-400 transition">News</span>
        <a
          target={`_blank`}
          href="https://twitter.com/cryptosourcers"
          className="hover:text-gray-400 transition"
        >
          Twitter
        </a>

        <span className="hover:text-gray-400 transition">Insights</span>
        <span className="hover:text-gray-400 transition">Learning</span>
        <span className="hover:text-gray-400 transition">Terms</span>
        <a
          target={`_blank`}
          href="https://moralis.io/"
          className="hover:text-gray-400 transition"
        >
          Moralis
        </a>

        <span className="hover:text-gray-400 transition">Newsletter</span>
        <span className="hover:text-gray-400 transition">Testimonials</span>
        <span className="hover:text-gray-400 transition">Privacy</span>
        <span className="hover:text-gray-400 transition">Contact</span>
      </div>
    </footer>
  );
};
export default Footer;
