import { dollarIcon, locationIcon, workIcon } from "./Icons";
import punk from "../images/punk4596.png";
import Tag from "./Tag";

// tis for mapping over every available job.
const RoleCard = () => {
  return (
    <div className="roleCard relative flex flex-col md:flex-row justify-between items-center gap-y-6 border-l-2 border-[#ed194a] p-4 bg-[#ebebeb] hover:bg-[#cfcbcb] dark:bg-[#111115]/70 transition hover:dark:bg-[#16161c]/70 backdrop-blur-lg min-w-xl w-full md:min-h-[100px] rounded-md">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={punk}
          alt="brand-logo"
          className="h-12 w-auto rounded-full border-2 border-[#ed194a] md:mr-3"
        />
        <div className="left space-y-3">
          <div className="roleTitle-Tags flex items-center space-x-3">
            <h2 className="font-bold">Role title @ startupName</h2>
          </div>

          <div className="coreDetails ">
            <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
              <p className="flex items-center mr-1">
                <span className="mr-0.5 ">{locationIcon}</span>
                {"Remote, Anywhere"}
              </p>{" "}
              <p className="flex items-center mr-1">
                <span className="mr-0.5">{dollarIcon}</span>
                {"50,000"}
              </p>{" "}
              <p className="flex items-center mr-1">
                <span className="mr-0.5 ">{workIcon}</span>
                {"Permanent"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Solidity", "Hardhat", "VueJS", "Moralis", "Ethers.JS"].map(
              (item, idx) => (
                <Tag skill={item} id={idx} />
              )
            )}
          </div>
        </div>
      </div>
      <div className="right flex flex-col space-y-2 items-center">
        <span className="text-gray-600 text-sm">Posted: 4h ago</span>
        <button className="bg-transparent p-1 rounded-md text-[#ed194a] border border-[#ed194a] transition hover:bg-[#ed194a] hover:text-white">
          Show More
        </button>
      </div>
    </div>
  );
};
export default RoleCard;
