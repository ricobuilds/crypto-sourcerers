import { Helmet } from "react-helmet-async";
const punk = require("../images/punk4596.png");
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About • Web3Source • The #1 Gateway for Web3 Jobs & Talent.
        </title>
        <meta name="canonical" content="https://web3source.co/about" />
      </Helmet>
      <div className="about flex flex-col px-auto py-12 ">
        <div className="about-header mb-4 font-medium text-center">
          <div className="about-header-title">
            <h1 className="text-6xl tracking-widest font-bold">Web3Source</h1>
          </div>
          <div className="about-header-subtitle text-indigo-800 dark:text-indigo-400">
            The #1 gateway for Web3 Jobs & Talent.
          </div>
        </div>
        <div className="content flex flex-col mx-auto max-w-4xl space-y-4">
          <p className="subtitle text-left">Last updated: Feb 9, 2022</p>
          <p className="aboutDev-intro">
            <span className="text-sm italic">[clears throat in WGMI]</span>
            <br />
            Hey, this is
            <span className="dark:text-indigo-400 font-medium">
              {" "}
              Enric
            </span>{" "}
            typing here, a Fullstack Web3 Developer, and I have produced
            Web3Source in under 30 days (Feb9 - Mar6, 2022).
          </p>
          <p className="missionIntro">
            Web3Source is the world’s #1 Web3 gateway for Web3 jobs & talent.
            Founded and bootstrapped by yours truly, with the intent to assist
            startups in sourcing Web3 talent on a global scale, and for talented
            roleseekers and bountyseekers to be found.
          </p>
          <p className="missionValues">
            <span className="dark:text-indigo-400 font-medium">Trust</span>,{" "}
            <span className="dark:text-indigo-400 font-medium">
              reliability
            </span>
            , and{" "}
            <span className="dark:text-indigo-400 font-medium">commitment</span>{" "}
            - our core values which we strive to embody, as we provide value to
            roleseekers and companies during this migration into the new digital
            paradigm.
          </p>
          <p className="">
            Over the past 2 years, the global events we have experienced have
            shown us the deficiencies in our infrastructure, changing the
            workforce, and bringing forth digital solutions to solve them i.e.
            blockchain.
            <br />
            This has kicked the migration to a new digital era to full throttle,
            meaning that going digital will be a <b>must</b> for everyone to
            adapt. So, I took the steps to develop this platform, Web3Source, a
            platform that people all around the world can use to tap into this
            budding industry. The same can be said for "Web2.0" companies &
            crypto-based startups that are looking to move towards{" "}
            <span className=" dark:text-pink-500 font-medium">innovation</span>{" "}
            and <span className="dark:text-pink-500 font-medium">change</span>.
          </p>
          <p className="about-content">
            As we shift into a new paradigm, our goal is to help{" "}
            <span className=" dark:text-indigo-400 font-medium">you </span>
            find your home - whether you are transferring your skills over to
            blockchain, a fresh developer that has been learning Rust or
            Solidity and is ready to get the 🏀 rolling, or you are simply
            looking to build your blockchain-driven team, we aim to assist the
            ecosystem to the fullest.
            <br />
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
            <div className="p-4 w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-20 h-20 object-cover object-center mb-4 bg-gradient-to-tr from-[#ed194a] to-pink-500 border-2 border-white border-opacity-25"
                  src={punk}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg tracking-widest text-black dark:text-gray-100">
                    Enric
                  </h2>
                  <h3 className="dark:text-gray-500 mb-3">Founder, CTO</h3>
                  <p className="mb-4">Building cool sh*t in public!</p>
                  <span className="inline-flex space-x-4">
                    <a
                      className="ml-0 text-gray-700"
                      href="https://www.twitter.com/0xreeko"
                      target={"_blank"}
                    >
                      <svg
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5 fill-gray-700 transition hover:fill-gray-500"
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
                        className="w-5 h-5 fill-gray-700 transition hover:fill-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://enrictrillo.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 fill-gray-700 transition hover:fill-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
