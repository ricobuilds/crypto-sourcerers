import { Helmet } from "react-helmet-async";

const NoMatch = () => {
  
  return (
    <>
    <Helmet>
    <title>404 ERROR - Web3Source</title>
    <meta name="copyright" content="Web3Source, all rights reserved." />
    <meta
      name="description"
      content="You have accessed a page that is not present in our component tree."
    />
    <link rel="canonical" href="https://web3source.co/" />
    <meta
      name="keywords"
      content="web3 developer jobs, NFT developer jobs, blockchain developer jobs, metaverse developer jobs, crypto developer jobs, augmented reality developer jobs, virtual reality developer jobs, marketing jobs, community manager jobs, DAO developer jobs, DeFi developer jobs"
    />
    <meta name="author" content="0xreeko" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
  </Helmet>
    <div className="learning mx-auto my-24 py-20 max-w-lg flex flex-col items-center justify-center">
      <div className="">
        <h1 className="text-8xl px-auto w-full">
          <span className="text-sky-500 font-bold">4</span>
          <span className="text-indigo-500 font-bold">0</span>
          <span className="text-[#ed194a] font-bold">4</span>
          <p
            className="text-9xl tracking-widest w-full italic text-right text-transparent"
            style={{ WebkitTextStroke: "2px #ed194a" }}
          >
            ERROR
          </p>
        </h1>
      </div>
      <p className="text-4xl text-center">no match, sori, pliz :V</p>
    </div>
    </>
  );
};
export default NoMatch;
