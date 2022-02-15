import coverImg from "../images/blockchainImg.jpeg";

const Careers = () => {
  return (
    <div className="careers flex flex-col px-auto lg:px-auto py-4 space-y-4  ">
      <div className="header">
        <h1 className="text-4xl tracking-widest font-medium">Careers </h1>
        <p className="text-sm">
          Here are all the available pathways towards getting a blockchain
          related role.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 ">
        {[
          "Blockchain Developer",
          "Blockchain Engineer",
          "Security Auditor",
          "Community Manager",
          "Marketing Specialist",
          "Metatect",
        ].map((item) => (
          <div className="p-3 bg-white dark:bg-[#1d1d20] flex rounded-md space-x-3">
            <img
              className="h-[100px] w-[150px] rounded-md"
              src={`${coverImg}`}
              alt="cover"
            />
            <div className="right flex flex-col justify-between w-full">
              <div className="right-top">
                <h2 className="text-xl font-bold">{item}</h2>
                <p className="text-xs">
                  This role pertains to the use of {item} to work on...
                </p>
              </div>
              <div className="right-bottom flex justify-end">
                <button className="text-xs border rounded p-1">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Careers;
