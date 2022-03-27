import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { Helmet } from "react-helmet-async";
import {
  SearchIcon,
  ViewGridIcon,
  ViewListIcon,
  RefreshIcon,
} from "@heroicons/react/solid";
import RoleCard from "../components/RoleCard";
import { Switch } from "@headlessui/react";

const Roles = () => {
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);

  const [results, setResults] = useState<typeof Vacancy>([]);

  // filters
  const [title, setTitle] = useState("");
  const [remote, setRemote] = useState(false);
  const [benefits, setBenefits] = useState(false);

  // view
  const [viewStyle, setViewStyle] = useState("list");
  const [loadState, setLoadState] = useState("init");

  // type counters

  const getData = async () => {
    setLoadState("loading");
    const data = await query.find();
    setResults(data);
    console.log(data);
    setLoadState("fin");
  };

  const handleTitle = (p: string) => {
    let _v = p;
    setTitle(_v);
  };

  const changeBoolean = (t: string, p: boolean) => {
    if (t === "remote") {
      setRemote(p);
    }
    if (t === "benefits") {
      setBenefits(p);
    }
  };

  const reset = () => {
    setTitle("");
    setRemote(false);
    setBenefits(false);
    getData();
    console.log("the global reset");
  };

  const applyFilters = () => {
    let data = results;
    const isTitle = title.length > 0;
    const isRemote = remote === true;
    const isBenefits = benefits === true;

    console.log("title:", isTitle);
    console.log("remote:", isRemote);
    console.log("benefits:", isBenefits);

    if (isTitle && isTitle === true) {
      setResults(
        data.filter((item: any) =>
          item.attributes.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }

    if (isRemote && isRemote === true) {
      setResults(
        data.filter((item: any) => item.attributes.location[1] === remote)
      );
    }
    if (isBenefits && isBenefits === true) {
      setResults(
        data.filter((item: any) => item.attributes.benefits[0] === benefits)
      );
    }
  };

  useEffect(() => {
    applyFilters();
    const isTitle = title.length > 0;
    const isRemote = remote === true;
    const isBenefits = benefits === true;

    if (isTitle !== true && isRemote !== true && isBenefits !== true) {
      getData();
    }
  }, [title, remote, benefits]);

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
        {/* <div className="h-24 bg-[#ed194a]/60 w-full flex justify-center items-center">
          <p className="text-white">Promotional Banner</p>
        </div> */}
        <div className="w-full flex flex-col sm:flex-row items-center py-3 gap-x-9">
          <div className="roleTitle relative flex items-center justify-between w-full max-w-lg">
            <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitle(e.target.value)}
              placeholder="What title are you looking for next...?"
              className="p-1 pl-10 w-[100%] outline-none rounded-full bg-black/5  transition border border-gray-800 focus:border-[#6387f1]"
            />
          </div>

          <div className="roleLocation flex items-center space-x-3">
            <span className="flex items-center">
              <Switch
                checked={remote}
                onChange={() => changeBoolean("remote", !remote)}
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
                checked={benefits}
                onChange={() => changeBoolean("benefits", !benefits)}
                className={`w-10 h-6 ${
                  benefits ? "bg-[#6387f1]" : "bg-[#6387f1]/20"
                }
            relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${benefits ? "translate-x-4" : "translate-x-0"}
              pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
              </Switch>
              <p className="ml-1">💰 Pays in Crypto</p>
            </span>
          </div>
          <div
            onClick={reset}
            className="text-[#6387f1] flex items-center space-x-2 transition hover:cursor-pointer hover:text-[#6387f1]/70"
          >
            <RefreshIcon className="w-5 h-5 rotate-[125deg]" />
            <p>Reset</p>
          </div>
        </div>

        <div className="mt-3 flex justify-between">
          <div>Fetched {results.length} results</div>
          <div className="flex items-center space-x-3">
            <span>View Options</span>
            <div className="flex">
              <ViewGridIcon
                onClick={() => setViewStyle("grid")}
                className={`w-5 h-5 cursor-pointer transition ${
                  viewStyle === "grid"
                    ? "text-[#ed194a]"
                    : "text-gray-600 hover:text-[#ed194a]/60"
                }`}
              />
              <ViewListIcon
                onClick={() => setViewStyle("list")}
                className={`w-5 h-5 cursor-pointer transition ${
                  viewStyle === "list"
                    ? "text-[#ed194a]"
                    : "text-gray-600 hover:text-[#ed194a]/60"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="bgb flex flex-col md:flex-row space-y-9 sm:space-y-0 sm:space-x-6">
          {loadState !== "fin" ? (
            <h1>Loading...</h1>
          ) : results.length > 0 ? (
            <>
              <div
                id="roleList"
                className={
                  viewStyle !== "grid"
                    ? "flex flex-col w-full gap-y-6"
                    : "grid lg:grid-cols-3 gap-6 justify-items-center w-full"
                }
              >
                {results.map((res: any) => (
                  <RoleCard
                    key={res.attributes.objectId}
                    id={res}
                    title={res.attributes.title}
                    startupId={res.attributes.startupId}
                    location={res.attributes.location}
                    base={res.attributes.baseSalary}
                    max={res.attributes.maxSalary}
                    type={res.attributes.type}
                    skills={res.attributes.skills}
                    view={viewStyle}
                    time={res.attributes.createdAt}
                  />
                ))}
              </div>
            </>
          ) : (
            <p>No results found :(</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Roles;
