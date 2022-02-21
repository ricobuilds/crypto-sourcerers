const About = () => {
  return (
    <div className="about flex flex-col px-auto lg:px-32 py-12 space-y-4">
      <div className="about-header mb-4 font-medium text-center">
        <div className="about-header-title ">
          <h1 className="text-6xl tracking-widest font-bold">
            Crypto Sourcerers
          </h1>
        </div>
        <div className="about-header-subtitle text-indigo-800 dark:text-indigo-400">
          The world's #1 source for blockchain talent.
        </div>
        <p className="subtitle text-left">Last updated: Feb 9, 2022</p>
      </div>
      <p className="aboutDev-intro">
        <span className="text-sm italic">[clears throat in WGMI]</span> Hey,
        this is
        <span className="dark:text-indigo-400 font-medium">
          {" "}
          Enrique Trillo
        </span>{" "}
        typing here, a Fullstack Web3 Developer, and I have produced Crypto
        Sourcerers - sorcerers🔮 get it? ;)
      </p>
      <p className="missionIntro">
        Crypto Sorcerers is the world’s #1 source for blockchain talent, founded
        and developed by yours truly - we aim to provide the world with a
        gateway for finding blockchain talent on a global scale.
      </p>
      <p className="missionValues">
        <span className="dark:text-indigo-400 font-medium">Trust</span>,{" "}
        <span className="dark:text-indigo-400 font-medium">reliability</span>,
        and <span className="dark:text-indigo-400 font-medium">commitment</span>{" "}
        - our core values which we strive to embody, as we provide value to
        roleseekers and companies during this migration into the new digital
        paradigm.
      </p>
      <p className="">
        From our Founder’s experience, he found that when transferring his
        creative and development experience over to blockchain, there weren’t
        many easy-to-find sources for getting a role, so he took the step to
        develop this platform, Crypto Sourcerers, so that people looking to tap
        into this budding industry can get a glimpse of the many offerings that
        the cryptosphere has to offer. The same can be said for many "Web2.0"
        companies & crypto-based startups alike, that are looking to move
        towards{" "}
        <span className=" dark:text-pink-500 font-medium">innovation</span> and{" "}
        <span className="dark:text-pink-500 font-medium">change</span>.
      </p>
      <p className="about-content">
        As we shift into a new paradigm, our goal is to help{" "}
        <span className=" dark:text-indigo-400 font-medium">you </span>
        find your home - whether you are transferring your skills over to
        blockchain, a fresh developer that has been learning Rust or Solidity
        and is ready to get the 🏀 rolling, or you are simply looking to build
        your blockchain-driven team, we aim to assist the ecosystem to the
        fullest.
        <span className="text-sm italic">
          {" "}
          Welcome, to the cryptosphere. [drops mic]
        </span>
      </p>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="text-2xl font-medium title-font mb-4 text-[#ed194a]">
            OUR TEAM
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-20 h-20 object-cover object-center mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-100">
                  Enrique Trillo
                </h2>
                <h3 className="text-gray-500 mb-3">CTO</h3>
                <p className="mb-4">Building cool sh*t.</p>
                <span className="inline-flex">
                  <a
                    className="ml-0 text-gray-500"
                    href="https://www.twitter.com/0xreeko"
                    target={"_blank"}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
