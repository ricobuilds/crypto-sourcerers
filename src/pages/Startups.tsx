import { Helmet } from "react-helmet-async";
const Startups = () => {
  return(
    <div className="startups">
      <Helmet>
        <title>Startups - The #1 Gateway for Web3 Jobs & Talent.</title>
        <meta name="copyright" content="Web3Source, all rights reserved." />
        <meta name="description" content="Find your home in the Web3." />
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
          <h1 className="text-4xl tracking-widest font-bold">Startups</h1>
          <p className="text-sm">
            Find your home in the Web3.
          </p>
        </div>
      </div>
      </div>
  )
}; export default Startups;