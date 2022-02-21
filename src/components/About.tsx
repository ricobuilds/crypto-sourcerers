import punk from "../images/punk4596.png";
import globeIcon from "../images/icons8-globe-64.png";
const About = () => {
  return (
    <div className="about flex flex-col px-auto lg:px-32 py-12 ">
      <div className="about-header mb-4 font-medium text-center">
        <div className="about-header-title ">
          <h1 className="text-6xl tracking-widest font-bold">
            Crypto Sourcerers
          </h1>
        </div>
        <div className="about-header-subtitle text-indigo-800 dark:text-indigo-400">
          The world's #1 source for blockchain talent.
        </div>
      </div>
      <div className="content flex flex-col justify-center items-center mx-auto max-w-4xl space-y-4">
        <p className="subtitle text-left">Last updated: Feb 9, 2022</p>
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
          Crypto Sorcerers is the world’s #1 source for blockchain talent,
          founded and developed by yours truly - we aim to provide the world
          with a gateway for finding blockchain talent on a global scale.
        </p>
        <p className="missionValues">
          <span className="dark:text-indigo-400 font-medium">Trust</span>,{" "}
          <span className="dark:text-indigo-400 font-medium">reliability</span>,
          and{" "}
          <span className="dark:text-indigo-400 font-medium">commitment</span> -
          our core values which we strive to embody, as we provide value to
          roleseekers and companies during this migration into the new digital
          paradigm.
        </p>
        <p className="">
          From our Founder’s experience, he found that when transferring his
          creative and development experience over to blockchain, there weren’t
          many easy-to-find sources for getting a role, so he took the step to
          develop this platform, Crypto Sourcerers, so that people looking to
          tap into this budding industry can get a glimpse of the many offerings
          that the cryptosphere has to offer. The same can be said for many
          "Web2.0" companies & crypto-based startups alike, that are looking to
          move towards{" "}
          <span className=" dark:text-pink-500 font-medium">innovation</span>{" "}
          and <span className="dark:text-pink-500 font-medium">change</span>.
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
      </div>
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
                className="flex-shrink-0 rounded-full w-20 h-20 object-cover object-center mb-4 bg-gradient-to-tr from-[#ed194a] to-pink-500 border-2 border-white border-opacity-25"
                src={punk}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-100">
                  Enrique Trillo
                </h2>
                <h3 className="text-gray-500 mb-3">CTO</h3>
                <p className="mb-4">Building cool sh*t.</p>
                <span className="inline-flex space-x-4">
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
                      className="w-5 h-5 text"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/enrictrillo/"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      className="w-5 h-5 fill-white"
                    >
                      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
                    </svg>
                  </a>
                  <a href="https://enrictrillo.com">
                    <img src={globeIcon} alt="global" className="w-5 h-5" />
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
