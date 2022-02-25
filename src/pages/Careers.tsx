import coverImg from "../images/blockchainImg.jpeg";
import { Helmet } from "react-helmet-async";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - The World's #1 Source for Blockchain Talent.</title>
        <meta
          name="copyright"
          content="Crypto Sourcerers, All rights reserved."
        />
        <meta
          name="description"
          content="Choose your pathway within the cryptosphere"
        />
        <meta
          name="keywords"
          content="blockchain job, crypto job, metaverse job, NFT job, web3 jobs"
        />
        <meta name="author" content="0xreeko" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <div className="careers flex flex-col px-auto lg:px-auto py-4 space-y-4  mb-6">
        <div className="header">
          <h1 className="text-4xl tracking-widest font-bold">Careers </h1>
          <p className="text-sm">
            Here are all the available pathways towards getting a blockchain
            related role. Don't fret if you don't see your pathway, you could
            pave the way if you've found a niche.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Blockchain Developer</h2>
                <p className="text-xs">
                  As a Blockchain Developer, you will be responsible for
                  developing applications on a network, which spans from
                  developing Web3 dApps, to Solidity smart contracts for
                  example.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Blockchain Engineer</h2>
                <p className="text-xs">
                  As a Blockchain Engineer, you will be responsible for
                  engineering and/or architecting protocols that drive value to
                  its target audience.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Web3 Frontend Engineer</h2>
                <p className="text-xs">
                  As a Web3 Frontend Engineer, you will be responsible for
                  developing the frontend aspect of a Web3 dApp.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Web3 Backend Engineer</h2>
                <p className="text-xs">
                  As a Web3 Backend Engineer, you will be responsible for
                  developing the backend aspect of a Web3 dApp, i.e. smart
                  contracts, APIs, servers.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Security Auditor</h2>
                <p className="text-xs">
                  As a Security Auditor, you will be responsible for auditing
                  and testing smart contracts to ensure that they are secure
                  enough for deployment.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Community Manager</h2>
                <p className="text-xs">
                  As a Community Manager, you will be responsible for driving
                  the community and promoting growth and success.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Marketing Strategist</h2>
                <p className="text-xs">
                  As a Marketing Strategist, you will be responsible for
                  leveraging your knowlege and experience in the crypto
                  ecosystem to execute strategies and generating meaningful
                  engagement that drives growth.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-full w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">Metatect</h2>
                <p className="text-xs">
                  A term I coined, but this refers to architects in the
                  Metaverse. You will be responsible for architecting assets for
                  digital experiences in these virtual worlds.
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Careers;
