const About = () => {
  return (
    <div className="about flex flex-col px-auto lg:px-auto py-12 space-y-4">
      <div className="about-header mb-4 font-medium text-center">
        <div className="about-header-title text-4xl">
          <span className="tracking-widest font-bold">CryptoSourcerers</span>
        </div>
        <div className="about-header-subtitle text-indigo-800 dark:text-indigo-400">
          The world's #1 source for blockchain talent.
        </div>
      </div>
      <p className="dev-intro">
        <span className="text-sm italic">[clears throat]</span> Hey, this is
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          {" "}
          Enric Trillo
        </span>{" "}
        typing here, a Fullstack Web3 Developer, and I have produced
        CryptoSourcerers (sorcerers - get it?😉) - the world's #1 hub for
        blockchain talent.
      </p>
      <p className="about-intro">
        CryptoSourcerers is a platform for blockchain talent of all levels,
        spanning across the entire spectrum of the cryptosphere. It was born
        from the idea of providing a platform that promotes elements of
        cryptocurrency, that being{" "}
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          transparency
        </span>{" "}
        and{" "}
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          privacy{" "}
        </span>
        to this growing field.
      </p>
      <p className="about-content">
        As we shift into a new paradigm, our goal is to help{" "}
        <span className="text-indigo-800 dark:text-indigo-400 font-medium">
          you
        </span>
        , the talented individual, to find your home - whether you are
        transferring your skills over to blockchain, a fresh developer has been
        learning Rust or Solidity and is ready to get the 🏀 rolling, or you are
        looking for experienced individuals who will help bring your vision to
        life, we aim to provide an experience that
        <span className="text-sm italic"> [drops mic]</span>
      </p>
    </div>
  );
};
export default About;
