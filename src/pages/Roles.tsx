import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import RoleCard from "../components/RoleCard";
import { SearchIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useFilterSearch } from "src/hooks/useFilterSearch";

const Roles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [numba] = useFilterSearch();
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
            <p>
              Get results in a flash by entering keywords (skills, tools etc)
              ex. rust defi remote
            </p>
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
              Narrow down by entering the ticker of an ecosystem - ex. ftm,
              avax, matic 👀
            </p>
          </div>
        </div>
        <div className="max-w-lg w-full p-3">
          Filter results
          <div className="searchBar relative flex items-center border-2 border-gray-300 focus-within:border-[#6387f1]">
            <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-600 dark:text-gray-300 pointer-events-none" />
            <input
              // onChange={(e) => useFilterSearch(e.target.value, res)}
              placeholder="ex. react hardhat london remote 60000 matic"
              className="w-full pl-10 placeholder-gray-600 dark:placeholder-gray-200 italic focus:not-italic bg-gray-600 dark:bg-gray-400 bg-opacity-50 focus:bg-white dark:focus:bg-white focus:ring-4 focus:ring-[#6387f1]/20 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mt-3">Fetched {numba} results</div>
        <div className="grid gap-y-3 justify-items-center w-full">
          <RoleCard />
          <RoleCard />
          <RoleCard />
          <RoleCard />
        </div>
      </div>
    </>
  );
};
export default Roles;
