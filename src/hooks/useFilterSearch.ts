import { Moralis } from "moralis";
// Param 1: content object with all selected filters ex. "DeFi", "FTM", "Solidity", "Hardhat"
// Param 2: result variable that displays filtered results as per content variable
/* Functionality:
- allows user to select and deselect a filter, and displays results that match in real time
- if no filters selected, display
param: string, results: []
*/

import { useState, useEffect } from "react";
export const useFilterSearch = (search: string) => {
  // 1. display ALL results => predefined query
  /* 2. display filtered results =>
      - take in param
      - split string[] into individuals
      - check if results contains any of the params
      */
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);
  const [results, setResults]: typeof Vacancy = useState();
  const [filtered, setFiltered]: typeof Vacancy = useState();
  const [loadState, setLoadState] = useState("init");
  const [param, setParam] = useState(search);

  useEffect(() => {
    (async () => {
      setLoadState("loading");

      let _r = await query.find();
      if (param !== "" && loadState == "loading") {
        setResults(_r);
        // let _c = param.split(" ")
        setFiltered(
          results.filter((res: any) => {
            return (
              res.attributes.description
                .toLowerCase()
                .includes(param.toLowerCase()),
              res.attributes.title.toLowerCase().includes(param.toLowerCase()),
              res.attributes.location[0].area
                .toLowerCase()
                .includes(param.toLowerCase()),
              res.attributes.location[0].remote
                .toLowerCase()
                .includes(param.toLowerCase())
            );
          })
        );
        setLoadState("fin");
      } else {
        setFiltered(_r);
        setLoadState("fin");
      }
    })();
  }, [param]);

  return [filtered, setParam, loadState];
};
