import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { Helmet } from "react-helmet-async";
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/solid";
import RoleCard from "../components/RoleCard";

const Roles = () => {
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);
  const [results, setResults]: any = useState([]);
  const [filtered, setFiltered]: typeof Vacancy = useState();
  const [loadState, setLoadState] = useState("init");

  const [remote, setRemote] = useState(false);
  const [viewStyle, setViewStyle] = useState("list");

  // async function getVacancies() {
  //   let set = await query.find();
  //   setResults(set);
  //   console.log(results);
  // }

  /*
  // 1. If the input field empty, display all records
  // 2. If the input field populated, display relevant records

  // filtered results init
  const [filteredRes, setFilteredRes] = useState([]);

  const filteredSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    if (search !== "") {
      // filter
      const filter = results.filter((res: any) => {
        return (
          res.attributes.description
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          res.attributes.title.toLowerCase().includes(search.toLowerCase()) ||
          res.attributes.location[0].area
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          res.attributes.location[0].remote
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      });
      setFilteredRes(filter);
    } else {
      const filter = results.filter((res: any) => {
        return (
          res.attributes.description
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          res.attributes.title.toLowerCase().includes(search.toLowerCase()) ||
          res.attributes.location[0].area
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          res.attributes.location[0].remote
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      });
      setFilteredRes(filter);
    }
  };
  */

  const reset = () => {
    setRemote(false);
    console.log("the global reset");
  };

  const handleView = (param: string) => {
    if (viewStyle !== param) {
      setViewStyle(param);
    } else {
      return;
    }
  };

  useEffect(() => {
    (async () => {
      setLoadState("loading");

      let _r = await query.find();
      if (remote) {
        setResults(_r);
        await setFiltered(
          results.filter((res: any) => {
            return res.attributes.location[1] === remote;
          })
        );
        setLoadState("fin");
      } else {
        setFiltered(_r);
        setLoadState("fin");
      }
    })();
  }, [remote]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Roles • Web3Source • World's #1 Gateway for Web3 Jobs & Talent.
        </title>
      </Helmet>
      <div className="flex flex-col gap-y-4 pb-12 w-full">
        <div className=" w-full flex flex-col items-center space-y-3 p-3">
          <div className="easySearch relative flex flex-col sm:flex-row sm:items-center sm:space-x-6">
            {/* <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
            <input
              // onChange={(e) => useFilterSearch(e.target.value, res)}
              placeholder="ex. react hardhat london remote 60000 matic"
              onChange={(e) => setParam(e.target.value)}
              placeholder="ex. react hardhat london remote matic"
              className="w-full pl-10 placeholder-gray-600 dark:placeholder-gray-200 italic focus:not-italic bg-gray-600 dark:bg-gray-400 bg-opacity-50 focus:bg-white dark:focus:bg-white focus:ring-4 focus:ring-[#6387f1]/20 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            /> */}

            <div className="roleTitle flex items-center">
              <div className="flex flex-wrap space-x-4">
                <input
                  type="text"
                  placeholder="Role Title"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
                />
              </div>
            </div>

            <div className="roleLocation flex items-center">
              <div className="flex flex-wrap space-x-4">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
                />
                <span className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={remote}
                    onChange={() => setRemote(!remote)}
                  />
                  <p className="ml-1">🌍 Remote</p>
                </span>
              </div>
            </div>
            <div className="roleSalary flex items-center">
              <span>$0</span>
              <input
                type="range"
                name=""
                id=""
                min={0}
                max={1000000}
                className={"mx-0.5"}
              />
              <span>$500,000</span>
            </div>
            <div className="paysInCrypto">
              <span className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={remote}
                  onChange={() => setRemote(!remote)}
                />
                <p className="ml-1">💰 Pays in Crypto</p>
              </span>
            </div>
          </div>
          <div className="">
            <span
              className="text-[#ed194a] text-center transition hover:cursor-pointer hover:text-[#ed194a]/70"
              onClick={reset}
            >
              Reset
            </span>
          </div>
        </div>
        {loadState === "fin" ? (
          <>
            <div className="mt-3 flex justify-between">
              <div>Fetched {filtered.length} results</div>
              <div className="flex items-center space-x-3">
                <span>View options</span>
                <div className="flex">
                  <ViewGridIcon
                    onClick={() => handleView("grid")}
                    className={`w-5 h-5 transition hover:text-[#ed194a]/60 ${
                      viewStyle === "grid" ? "text-[#ed194a]" : "text-gray-600"
                    }`}
                  />
                  <ViewListIcon
                    onClick={() => handleView("list")}
                    className={`w-5 h-5 transition hover:text-[#ed194a]/60 ${
                      viewStyle === "list" ? "text-[#ed194a]" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="bgb flex flex-col sm:flex-row space-y-9 sm:space-y-0 sm:space-x-6">
              <div className="w-52 flex flex-col space-y-6 static">
                <div className="type">
                  <h2 className="font-bold">Type</h2>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Full-Time</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Part-Time</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Internship</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Contract</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Freelance</span>
                  </div>
                </div>
                <div className="ecosystem">
                  <h2 className="font-bold">Ecosystem</h2>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Solana</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Ethereum</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Polygon</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>BNB Smart Chain</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Fantom</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Avalanche</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <span>Harmony One</span>
                  </div>
                </div>
              </div>
              <div
                className={
                  viewStyle !== "grid"
                    ? "grid gap-y-6 justify-items-center w-full"
                    : "grid grid-cols-2 gap-6"
                }
              >
                {filtered.map((res: any) => (
                  <RoleCard
                    id={res.id}
                    title={res.attributes.title}
                    startupId={res.attributes.startupId}
                    location={res.attributes.location}
                    base={res.attributes.baseSalary}
                    max={res.attributes.maxSalary}
                    type={res.attributes.type}
                    skills={res.attributes.skills}
                    view={viewStyle}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};
export default Roles;
