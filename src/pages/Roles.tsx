import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { Helmet } from "react-helmet-async";
import {
  ChevronUpIcon,
  SearchIcon,
  ViewGridIcon,
  ViewListIcon,
  RefreshIcon,
} from "@heroicons/react/solid";
import RoleCard from "../components/RoleCard";
// import { Filter } from "src/context/interfaces";
import { Disclosure, Switch } from "@headlessui/react";

const Roles = () => {
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);
  const [results, setResults]: any = useState([]);
  const [filtered, setFiltered]: typeof Vacancy = useState();
  const [loadState, setLoadState] = useState("init");

  const [remote, setRemote] = useState(false);
  const [cryptoOpt, setCryptoOpt] = useState(false);
  // const [enabled, setEnabled] = useState(false);
  const [viewStyle, setViewStyle] = useState("list");

  // interface IFilter {
  //   title: string,
  //   skills:string[],
  //   description: string,
  //   salary:[number, number],
  //   location: [string, boolean],
  //   experience: number,
  //   ecosystem: string[]
  // }

  // let [filters, setFilters] = useState<Filter>({
  //   title: "",
  //   skills: [""],
  //   description: "",
  //   type: "",
  //   salary: [0, 0, false],
  //   location: ["Global", true],
  //   experience: 0,
  //   ecosystem: [""],
  // });

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

  useEffect(() => {
    console.log(viewStyle);
  }, [viewStyle]);

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
        <div className="w-full flex flex-col sm:flex-row items-center py-3 gap-x-9">
          {/* <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
            <input
              // onChange={(e) => useFilterSearch(e.target.value, res)}
              placeholder="ex. react hardhat london remote 60000 matic"
              onChange={(e) => setParam(e.target.value)}
              placeholder="ex. react hardhat london remote matic"
              className="w-full pl-10 placeholder-gray-600 dark:placeholder-gray-200 italic focus:not-italic bg-gray-600 dark:bg-gray-400 bg-opacity-50 focus:bg-white dark:focus:bg-white focus:ring-4 focus:ring-[#6387f1]/20 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            /> */}
          {/* <div className="relative flex items-center">
              <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
              <input
                // onChange={(e) => useFilterSearch(e.target.value, res)}
                placeholder="ex. react hardhat london remote 60000 matic"
                className="w-full pl-10 placeholder-gray-600 dark:placeholder-gray-200 italic focus:not-italic bg-gray-600 dark:bg-gray-400 bg-opacity-50 focus:bg-white dark:focus:bg-white focus:ring-4 focus:ring-[#6387f1]/20 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div> */}
          <div className="roleTitle relative flex items-center w-full max-w-lg">
            <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
            <input
              type="text"
              placeholder="Role Title"
              className="p-1 pl-10 w-[100%] outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#6387f1] tracking-widest"
            />
          </div>

          <div className="roleLocation flex items-center space-x-3">
            {/* <input
                type="text"
                placeholder="Enter location"
                className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
              /> */}
            <span className="flex items-center">
              <Switch
                checked={remote}
                onChange={() => setRemote(!remote)}
                className={`w-10 h-6 ${
                  remote ? "bg-[#6387f1]" : "bg-[#6387f1]/20"
                }
            relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${remote ? "translate-x-4" : "translate-x-0"}
              pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
              </Switch>
              <p className="ml-1">🌍 Remote</p>
            </span>
          </div>
          <div className="paysInCrypto">
            <span className="flex items-center">
              <Switch
                checked={cryptoOpt}
                onChange={() => setCryptoOpt(!cryptoOpt)}
                className={`w-10 h-6 ${
                  cryptoOpt ? "bg-[#6387f1]" : "bg-[#6387f1]/20"
                }
            relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${cryptoOpt ? "translate-x-4" : "translate-x-0"}
              pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
              </Switch>
              <p className="ml-1">💰 Pays in Crypto</p>
            </span>
          </div>
          <div className="text-[#6387f1] flex items-center space-x-2 transition hover:cursor-pointer hover:text-[#6387f1]/70">
            <RefreshIcon className="w-5 h-5 rotate-[125deg]" />
            <p className="" onClick={reset}>
              Reset
            </p>
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
                    onClick={() => setViewStyle("grid")}
                    className={`w-5 h-5 transition hover:text-[#ed194a]/60 ${
                      viewStyle === "grid" ? "text-[#ed194a]" : "text-gray-600"
                    }`}
                  />
                  <ViewListIcon
                    onClick={() => setViewStyle("list")}
                    className={`w-5 h-5 transition hover:text-[#ed194a]/60 ${
                      viewStyle === "list" ? "text-[#ed194a]" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="bgb flex flex-col sm:flex-row space-y-9 sm:space-y-0 sm:space-x-6">
              <div className="w-52 flex flex-col static">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-bold text-left text-[#ed194a] bg-indigo-100 dark:bg-indigo-100/5 rounded-lg transition hover:bg-indigo-200 dark:hover:bg-indigo-200/20 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Role Type</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-[#ed194a]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className="type space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Full-Time</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white ">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Part-Time</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white ">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Intership</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white ">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Contract</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white ">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Freelance</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white ">
                              0
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-bold text-left text-[#ed194a] bg-indigo-100 dark:bg-indigo-100/5 rounded-lg transition hover:bg-indigo-200 dark:hover:bg-indigo-200/20 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Ecosystems</span>

                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-[#ed194a]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className="ecosystem space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Solana</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white ">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Ethereum</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Polygon</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>BNB</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Fantom</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Avalanche</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Harmony One</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Polkadot</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Cosmos</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Cardano</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Terra</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Near</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Hedera</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>Zilliqa</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-x-2 flex items-center">
                              <input type="checkbox" name="" id="" />
                              <span>IOTA</span>
                            </div>
                            <div className="px-2 rounded-md bg-[#ed194a]/70 dark:text-white">
                              0
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div
                className={
                  viewStyle !== "grid"
                    ? "grid gap-y-4 justify-items-center w-full"
                    : "grid grid-cols-2 gap-6 justify-items-center w-full"
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
