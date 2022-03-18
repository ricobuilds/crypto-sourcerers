import Tag from "./Tag";
const punk = require("../images/punk4596.png");

// tis for mapping over every available job.
const RoleCard = (props: any) => {
  return (
    <div
      key={props.id}
      className={
        props.view !== "grid"
          ? "roleCard relative flex flex-col md:flex-row justify-between items-center gap-y-6 border-l-2 border-[#ed194a] p-4 bg-white hover:bg-[#dedee5]/80 dark:bg-[#1a1a20]/80 transition hover:dark:bg-[#1d1d23]/80 backdrop-blur-lg min-w-xl w-full md:min-h-[100px] rounded-md"
          : "roleCard relative flex flex-col justify-between items-center gap-y-6 border-l-2 border-[#ed194a] p-4 bg-white hover:bg-[#dedee5]/80 dark:bg-[#1a1a20]/80 transition hover:dark:bg-[#1d1d23]/80 backdrop-blur-lg min-w-xl w-full md:min-h-[100px] rounded-md"
      }
    >
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={punk}
          alt="brand-logo"
          className="h-12 w-auto rounded-full border-2 border-[#ed194a] md:mr-3"
        />
        <div className="left space-y-1">
          <div className="roleTitle-Tags flex flex-col items-center   sm:items-start">
            <h2 className="font-bold">{props.title}</h2>
            <div className="text-sm">{props.startupId} </div>
          </div>
          <div className="coreDetails">
            <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
              <p>
                {props.location[0] == "Global" && props.location[1] === true
                  ? "Global"
                  : `${props.location[0]} ${
                      props.location[1] === true ? "- Remote" : ``
                    } `}
              </p>
              {"· "}
              {/* {maxSalary ? `~ ${maxSalary}` : ""} */}
              <p>{`${props.base
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${
                props.max > props.base
                  ? ` - ${props.max
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                  : ""
              }`}</p>
              {"· "}
              <p>{props.type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 max-w-md">
        {props.skills.map((item: any, idx: any) => (
          <Tag skill={item} id={idx} />
        ))}
      </div>
      <div className="right flex flex-col space-y-2 items-center">
        <span className="text-gray-600 text-sm">Posted: 4h ago</span>
        <button className="bg-transparent p-1 rounded-md text-[#ed194a] border border-[#ed194a] transition hover:bg-[#ed194a] hover:text-white">
          Read More
        </button>
      </div>
    </div>
  );
};
export default RoleCard;
