const About = () => {
  return (
    <div className="about flex flex-col px-auto lg:px-32 py-12 space-y-4">
      <div className="about-header mb-4 font-medium text-center">
        <div className="about-header-title ">
          <h1 className="text-6xl tracking-widest font-bold">
            Crypto Sourcerers
          </h1>
          <p className="subtitle">Last updated: Feb 9, 2022</p>
        </div>
        <div className="about-header-subtitle text-indigo-800 dark:text-indigo-400">
          The world's #1 source for blockchain talent.
        </div>
      </div>
      <p className="aboutDev-intro">
        <span className="text-sm italic">[clears throat in WAGMI]</span> Hey,
        this is
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          {" "}
          Enric Trillo
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
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          Trust
        </span>
        ,{" "}
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          reliability
        </span>
        , and{" "}
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          commitment
        </span>{" "}
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
        <span className="dark:text-pink -500 font-medium">change</span>.
      </p>
      <p className="about-content">
        As we shift into a new paradigm, our goal is to help{" "}
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          you{" "}
        </span>
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
  );
};
export default About;
