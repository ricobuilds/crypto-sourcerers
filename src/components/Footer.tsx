const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-center space-y-6 sm:space-y-0 sm:space-x-12 flex flex-col sm:flex-row justify-center items-center h-12 w-full py-24 px-12">
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
  );
};
export default Footer;
