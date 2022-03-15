import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { Helmet } from "react-helmet-async";
import RoleCard from "../components/RoleCard";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Roles = () => {
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);
  const [results, setResults]: any = useState([]);
  const [filtered, setFiltered]: typeof Vacancy = useState();
  const [loadState, setLoadState] = useState("init");
  // const [param, setParam] = useState("");

  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState(false);

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
    setType("");
    setLocation("");
    setRemote(false);
    console.log("global reset");
  };
  useEffect(() => {
    (async () => {
      setLoadState("loading");

      let _r = await query.find();
      if (type.length > 0 || location.length > 0 || remote) {
        setResults(_r);
        let _c = results.filter((res: any) => {
          // let _s = param.split(" ");
          return (
            res.attributes.type == type ||
            res.attributes.location[0].remote == `${remote}` ||
            res.attributes.location[0].area == location
          );
        });
        // console.log(_c);
        setFiltered(_c);
        setLoadState("fin");
      } else {
        setFiltered(_r);
        setLoadState("fin");
      }
    })();
  }, [type, remote, location]);

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
      <div className="flex flex-col gap-y-4 pb-12 md:py-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full sm:divide-x-[1px] sm:divide-gray-200 sm:dark:divide-gray-800">
          <div className="tips flex flex-col text-center items-center p-3 max-w-xs">
            <span className="text-yellow-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p>Get results in a flash by selecting your desired parameters</p>
          </div>
          <div className="tips flex flex-col text-center items-center p-3 max-w-xs">
            <span className="text-rose-500">
              <LocationMarkerIcon className="w-6- h-6" />
            </span>
            <p>Find your dream Web3 role that is located in a city near you</p>
          </div>
          <div className="tips flex flex-col text-center items-center p-3 max-w-xs">
            <span className="text-sky-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p>
              Narrow down by selecting the ticker of an ecosystem - ex. FTM,
              AVAX, MATIC 👀
            </p>
          </div>
        </div>
        <div className=" w-full p-3">
          Filter results
          <div className="easySearch relative flex flex-wrap items-center justify-between">
            {/* <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
            <input
              onChange={(e) => setParam(e.target.value)}
              placeholder="ex. react hardhat london remote matic"
              className="w-full pl-10 placeholder-gray-600 dark:placeholder-gray-200 italic focus:not-italic bg-gray-600 dark:bg-gray-400 bg-opacity-50 focus:bg-white dark:focus:bg-white focus:ring-4 focus:ring-[#6387f1]/20 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            /> */}
            <div className="roleStartup flex flex-col">
              <div className="flex space-x-6">
                <select
                  className="rounded-md p-1 text-black peer-focus-within: "
                  id=""
                >
                  <optgroup label="Startups">
                    <option value="">Select Startup</option>
                    <option value="Full-time">Aave</option>
                    <option value="Part-time">Binance</option>
                    <option value="Contract">Crypto.com</option>
                    <option value="Internship">Delta</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">Eminado</option>
                    <option value="Freelance">ZapperFi</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="roleType flex flex-col">
              <div className="flex space-x-6">
                <select
                  className="rounded-md p-1 text-black peer-focus-within: "
                  id=""
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <optgroup label="Type">
                    <option value="">Role Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance">Freelance</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="roleSalary flex items-center">
              <span>Min</span>
              <input
                type="range"
                name=""
                id=""
                min={0}
                max={1000000}
                className={"mx-0.5"}
              />
              <span>Max</span>
            </div>
            <div className="roleLocation flex items-center">
              <div className="flex flex-wrap space-x-4">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.x. city OR country"
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
        {loadState == "fin" ? (
          <>
            <div className="mt-3">Fetched {filtered.length} results</div>
            <div className="grid gap-y-3 justify-items-center w-full">
              {filtered.map((res: any, idx: any) => (
                <RoleCard
                  id={res.id}
                  title={res.attributes.title}
                  startupId={res.attributes.startupId}
                  location={res.attributes.location}
                  base={res.attributes.baseSalary}
                  max={res.attributes.maxSalary}
                  type={res.attributes.type}
                />
              ))}
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
