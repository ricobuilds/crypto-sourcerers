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
import { Disclosure, Switch } from "@headlessui/react";

const Types = require("../types.json");
const Ecosystems = require("../ecosystems.json");

const Roles = () => {
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);

  const [results, setResults] = useState<typeof Vacancy>([]);

  // filters
  const [title, setTitle] = useState("");
  const [remote, setRemote] = useState(false);
  const [benefits, setBenefits] = useState(false);
  const [type, setType] = useState([...Types]);
  const [ecosystem, setEcosystem] = useState([...Ecosystems]);

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

  const changeTypeChecked = (id: number) => {
    const data = type;
    const changedData = data.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    console.log(changedData);
    setType(changedData);
  };

  const changeEcoChecked = (id: number) => {
    const data = ecosystem;
    const changedData = data.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    console.log(changedData);
    setEcosystem(changedData);
  };

  const reset = () => {
    setTitle("");
    setRemote(false);
    setBenefits(false);
    setType(
      type.map((item: any) =>
        item.checked === true ? { ...item, checked: !item.checked } : item
      )
    );
    setEcosystem(
      ecosystem.map((item: any) =>
        item.checked === true ? { ...item, checked: !item.checked } : item
      )
    );
    getData();
    console.log("the global reset");
  };
  // const filterType = (p: string) => {
  //   let input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById("typeList");
  // };
  // const applyFilters = () => {
  //   let updatedBase = results;

  //   // if (title !== "") {
  //   //   updatedBase = updatedBase.filter((item: any) =>
  //   //     item.attributes.title.toLowerCase().includes(title.toLowerCase())
  //   //   );
  //   // }
  //   // if (remote !== null && remote !== undefined) {
  //   //   updatedBase = updatedBase.filter(
  //   //     (item: any) => item.attributes.location[1] === remote
  //   //   );
  //   // }
  //   // if (benefits !== null && benefits !== undefined) {
  //   //   updatedBase = updatedBase.filter(
  //   //     (item: any) => item.attributes.benefits[0] === benefits
  //   //   );
  //   // }
  //   const typeChecked = type
  //     .filter((item) => item.checked === true)
  //     .map((item) => item);
  //   if (typeChecked) {
  //     updatedBase = updatedBase.filter((item: any) =>
  //       typeChecked.includes(item.attributes.type)
  //     );
  //   }
  //   const ecoChecked = ecosystem
  //     .filter((item) => item.checked === true)
  //     .map((item) => item.label.toLowerCase());
  //   if (ecoChecked) {
  //     updatedBase = updatedBase.filter((item: any) =>
  //       ecoChecked.includes(item.attributes.ecosystem)
  //     );
  //   }
  //   setResults(updatedBase);
  // };

  const applyFilters = () => {
    let data = results;
    const isTitle = title.length > 0;
    const isRemote = remote === true;
    const isBenefits = benefits === true;
    const isType =
      type.filter((item) => item.checked === true).length > 0 ? true : false;
    const isEco =
      ecosystem.filter((item) => item.checked === true).length > 0
        ? true
        : false;

    console.log("title:", isTitle);
    console.log("remote:", isRemote);
    console.log("benefits:", isBenefits);
    console.log("type:", isType);
    console.log("eco:", isEco);

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

    if (isType && isType === true) {
      // setResults(
      //   data.filter((item: any) => type.includes(item.attributes.type))
      // );
      // beautyProducts = temp1
      //   .map(({ categories, ...others }) => {
      //     const filteredCategories = categories.filter((cat) => cat.id === 43);
      //     return {
      //       filteredCategories,
      //       ...others,
      //     };
      //   })
      //   .filter((product) => product.categories.length > 0);

      const typeChecked = type
        .filter((item) => item.checked === true)
        .map((item) => item.value);

      // const typeArray = type.filter((item: any) => item.checked === true);
      // const dbArray = data.map((item: any) => item);
      // // const typeChecked = Object.values(dbArray).filter((v) => type);
      // const typeChecked = typeArray.length > 0 && dbArray.length > 0 ? true : false;

      if (typeChecked.length > 0) {
        // selectedCart.forEach((selected) =>
        //   setCart(cart.filter((entry) => entry.name !== selected))
        // );
        // console.log(typeChecked);
        // const filt = data.map((item: any) => {
        //   console.log(
        //     typeChecked.filter((i: any) =>
        //       item.attributes.type.toLowerCase().includes(i.value.toLowerCase())
        //     )
        //   );
        // });

        // let v = data.filter((item: any) =>
        //   typeChecked.includes(item.attributes.type)
        // );
        // console.log(v);
        // for (let i = 0; i < typeChecked.length; i++) {
        //   const el = typeChecked[i];
        //   console.log(el.value);
        //   data = data.filter((item: any) =>
        //     item.attributes.type.toLowerCase().includes(el.value)
        //   );
        // }
        // data.forEach((el: any) => {
        //   console.log(
        //     type.filter(
        //       (i) =>
        //         i.checked === true &&
        //         el.attributes.type.toLowerCase().includes(i.value.toLowerCase())
        //     )
        //   );
        // });
        // type.map((el: any) => {
        //   console.log(
        //     data.map(
        //       (i: any) =>
        //         el.checked === true &&
        //         i.attributes.type.toLowerCase().includes(el.value.toLowerCase())
        //     )
        //   );
        // });
        console.log(typeChecked);
        // let res = typeChecked.filter((el: string) => {
        //   data.forEach((i: any) =>
        //     el.toLowerCase().includes(i.attributes.type.toLowerCase())
        //   );
        // });

        // setResults(
        //   type
        //     .filter((el: any) =>
        //       data.map(
        //         (i: any) =>
        //           el.checked === true &&
        //           el.value
        //             .toLowerCase()
        //             .includes(i.attributes.type.toLowerCase())
        //       )
        //     )
        //     .flat()
        // );
        let frp = type
          .filter((item: any) => item.checked === true)
          .map((i: any) =>
            data.find(
              (el: any) =>
                el.attributes.type
                  .toLowerCase()
                  .match(i.value.toLowerCase()) !== undefined
            )
          );
        console.log(frp);
        setResults(frp);
        // setResults(typeChecked);
        // console.log(
        //   data.filter((item: any) => item.attributes.type.includes(typeChecked))
        //   );
        // console.log(
        //   data.filter((item: any) => typeChecked.includes(item.attributes.type))
        // );
      }
      // console.log(type);
      // console.log(type.filter((item: any) => item.checked === true));
    }
    if (isEco && isEco === true) {
      setResults(
        data.filter((item: any) =>
          ecosystem.includes(item.attributes.ecosystem)
        )
      );
    }
  };

  useEffect(() => {
    applyFilters();
    const isTitle = title.length > 0;
    const isRemote = remote === true;
    const isBenefits = benefits === true;
    const isType =
      type.filter((item) => item.checked === true).length > 0 ? true : false;
    const isEco =
      ecosystem.filter((item) => item.checked === true).length > 0
        ? true
        : false;

    if (
      isTitle !== true &&
      isRemote !== true &&
      isBenefits !== true &&
      isType !== true &&
      isEco !== true
    ) {
      getData();
    }
  }, [title, remote, benefits, type, ecosystem]);

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
          <div className="w-full md:w-52 flex md:flex-col space-x-4 pb-6 md:pb-0 md:space-x-0 static">
            <Disclosure as="div" className="mt-2" id="typeList">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-bold text-left text-[#ed194a] bg-indigo-100 dark:bg-indigo-100/5 rounded-lg transition hover:bg-indigo-200 dark:hover:bg-indigo-200/20 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span className="flex">Role Type</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#ed194a]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="type space-y-2">
                      {type.map((items: any) => (
                        <div className="flex items-center justify-between">
                          <div className="space-x-2 flex items-center">
                            <input
                              type="checkbox"
                              name={items.label}
                              value={items.value}
                              checked={items.checked}
                              onChange={() => changeTypeChecked(items.id)}
                            />
                            <span>{items.label}</span>
                          </div>
                          <div className="px-2 rounded-md bg-[#ed194a]/70 text-white">
                            <p>{0}</p>
                          </div>
                        </div>
                      ))}
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
                      {ecosystem.map((items: any) => (
                        <div className="flex items-center justify-between">
                          <div className="space-x-2 flex items-center">
                            <input
                              type="checkbox"
                              name=""
                              id={items.id}
                              value={items.value}
                              checked={items.checked}
                              onChange={() => changeEcoChecked(items.id)}
                            />
                            <span>{items.label}</span>
                          </div>
                          <div className="px-2 rounded-md bg-[#ed194a]/70 text-white">
                            0
                          </div>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
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
