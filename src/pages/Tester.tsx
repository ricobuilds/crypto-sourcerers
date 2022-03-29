// import { useEffect } from "react";
const Data = require("../data.json");

const Tester = () => {
  // useEffect(() => {
  //   Data.forEach((el: any) => {
  //     console.log(el.title);
  //   });
  // }, []);

  return (
    <div className="text-white">
      <h1>
        Show me results{" "}
        <span onClick={() => console.log("hey")} className="text-[#ed194a]">
          RESET
        </span>
      </h1>
      <span>No. results: {Data ? Data.length : 0} results</span>
      <div>
        <span>ehyehebht</span>
        {/* {Data.map((el: any, idx: any) => (
          <div>
            {idx + 1}. {el.title}
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default Tester;
