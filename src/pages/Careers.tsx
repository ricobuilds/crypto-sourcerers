import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Careers - The #1 Gateway for Web3 Jobs & Talent.</title>
        <meta name="copyright" content="Web3Source, all rights reserved." />
        <meta name="description" content="Find your niche in the Web3." />
        <meta name="canonical" content="https://web3source.co/careers" />
        <meta
          name="keywords"
          content="web3 jobs, NFT jobs, blockchain jobs, metaverse jobs, crypto jobs, augmented reality jobs, virtual reality jobs, marketing jobs, community manager jobs, DAO jobs, DeFi jobs"
        />
        <meta name="author" content="0xreeko" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <div className="careers flex flex-col max-w-7xl mx-auto lg:px-auto py-4 space-y-4 mb-6">
        <div className="header">
          <h1 className="text-4xl tracking-widest font-bold">Careers </h1>
          <p className="text-sm">
            Here are all the available pathways you can take a look at for
            gauging suitable Web3 niches . Don't fret if you don't see your
            pathway, you could pave the way if you've found a niche. Do you know
            of a pathway that is not included? Reach out to us via{" "}
            <a href="mailto:dev@web3source.co">
              <code className="text-[#ed194a] font-bold">
                dev@web3Source.co
              </code>
            </a>{" "}
            with the role title, brief breakdown, and a couple tools/skills
            needed, and we'll add it to the list below!
          </p>
        </div>
        <div className="grid sm:grid-cols-4 gap-0">
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Blockchain Developer</h2>
              <p className="text-sm">
                As a Blockchain Developer, you will be responsible for
                developing applications on a network, which spans from
                developing Web3 dApps, to Solidity smart contracts for example.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Blockchain Engineer</h2>
              <p className="text-sm">
                As a Blockchain Engineer, you will be responsible for
                engineering and/or architecting protocols that drive value to
                its target audience.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Web3 Developer</h2>
              <p className="text-sm">
                As a Web3 Frontend Engineer, you will be responsible for
                developing the frontend aspect of a Web3 dApp.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Web3 Engineer</h2>
              <p className="text-sm">
                As a Web3 Backend Engineer, you will be responsible for
                developing the backend aspect of a Web3 dApp, ex. smart
                contracts, APIs, servers.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Security Auditor</h2>
              <p className="text-sm">
                As a Security Auditor, you will be responsible for auditing and
                testing smart contracts to ensure that they are secure enough
                for deployment.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Community Manager</h2>
              <p className="text-sm">
                As a Community Manager, you will be responsible for driving the
                community and promoting growth and success.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Marketing Strategist</h2>
              <p className="text-sm">
                As a Marketing Strategist, you will be responsible for
                leveraging your knowlege and experience to execute strategies
                and generating meaningful engagement that drives growth.
              </p>
            </div>
          </div>
          <div className="p-3 py-6 hover:bg-[#dedee5]/80 hover:dark:bg-[#1d1d23]/80 flex border border-gray-800/5 space-x-3">
            <div className="right flex flex-col w-full">
              <h2 className="text-xl font-bold mb-3">Metatect</h2>
              <p className="text-sm">
                A term I came up with, that refers to archi(tects) in the
                (Meta)verse. You will be responsible for architecting assets for
                digital experiences in these virtual worlds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Careers;
