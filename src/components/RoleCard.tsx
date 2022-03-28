import Tag from "./Tag";
import moment from "moment";
const punk = require("../images/punk4596.png");

// tis for mapping over every available job.
const RoleCard = (props: any) => {
  return (
    <div
      key={props.id}
      className={
        props.view !== "grid"
          ? "roleCard relative flex flex-col md:flex-row justify-between items-center gap-y-6 border-l-2 border-[#ed194a] p-4 bg-[#f7f9fb] hover:bg-[#dedee5]/80 dark:bg-[#1c1b1c] transition hover:dark:bg-[#1d1d23] backdrop-blur-lg min-w-xl w-full md:max-h-[100px] rounded-md"
          : "roleCard relative flex flex-col justify-between gap-y-4 border-l-2 border-[#ed194a] p-4 bg-[#f7f9fb] hover:bg-[#dedee5]/80 dark:bg-[#1c1b1c]/80 transition hover:dark:bg-[#1d1d23] backdrop-blur-lg min-w-xs w-full h-fit rounded-md"
      }
    >
      <div
        className={
          props.viewStyle !== "grid"
            ? "flex flex-col md:flex-row items-center"
            : "flex flex-col items-start"
        }
      >
        <img
          src={punk}
          alt="brand-logo"
          className="h-12 w-auto rounded-full border-2 border-[#ed194a] md:mr-3"
        />
        <div className="left space-y-0">
          <div
            className={`roleTitle-Tags flex flex-col items-center ${
              props.viewStyle === "grid" ? "" : "sm:items-start"
            }`}
          >
            <h2 className="font-bold">{props.title}</h2>
            <div className="text-sm">{props.startupId} </div>
          </div>
          <div className="coreDetails">
            <div className="flex flex-wrap items-center text-gray-600 text-sm">
              <p>
                <span className="mr-0.5">
                  {props.location[0] == "Global" && props.location[1] === true
                    ? "Global"
                    : `${props.location[0]} ${
                        props.location[1] === true ? "- Remote" : ``
                      } `}
                </span>
                {"· "}
                {/* {maxSalary ? `~ ${maxSalary}` : ""} */}
                <span className="ml-0.5">
                  {`${props.base
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${
                    props.max > props.base
                      ? ` - ${props.max
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                      : ""
                  }`}
                </span>
                {"· "}
                <span className="mx-0.5">{props.type}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 max-w-sm">
        {props.skills.map((item: any, idx: any) => (
          <Tag skill={item} id={idx} />
        ))}
      </div>
      <div className="right flex flex-col space-y-2 items-center">
        <span className="text-gray-600 text-sm">
          {moment(props.time).fromNow()}
        </span>
        <button className="bg-transparent p-1 rounded-md text-[#ed194a] border border-[#ed194a] transition hover:bg-[#ed194a] hover:text-white">
          Read More
        </button>
      </div>
    </div>
  );
};
export default RoleCard;
