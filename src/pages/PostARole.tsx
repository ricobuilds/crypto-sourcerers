import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { dollarIcon, locationIcon, workIcon } from "../components/Icons";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/outline";
const networks = require("../networks.json");
// type location = {
//   remote: boolean;
//   location: string;
// }
// interface IRole {
//   roleTitle: string; // role title
//   description: string; // role's JD
//   tags: []; // skills for fast search
//   audience: string;
//   type: string;
//   baseSalary: number;
//   maxSalary?: number;
//   location: location;
//   twitteHandle: string;
//   startupName: string;
//   applyURI: string;
//   discountCode?: string;
//   brandLogo?: boolean;
//   survey: string;
// }

const PostARole = () => {
  const [selected, setSelected] = useState(networks[0]);
  const [type, setType] = useState("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState([""]);
  const [brand] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );
  const [baseSalary, setBaseSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);

  const handleTags = (param: string) => {
    if (param.includes(", ")) {
      let _ts = param.split(",");
      setTags(_ts);
    } else {
      let _th = [];
      _th.push(param);
      setTags(_th);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Post A Role • Web3Source • World's #1 Gateway for Web3 Jobs & Talent.
        </title>
        <meta name="copyright" content="Web3Source, all rights reserved." />
        <meta
          name="description"
          content="Post your vacancy and attract the best talent in the Web3 space!"
        />
        <meta name="canonical" content="https://web3source.co" />
        <meta
          name="keywords"
          content="web3 developer jobs, NFT developer jobs, blockchain developer jobs, metaverse developer jobs, crypto developer jobs, augmented reality developer jobs, virtual reality developer jobs, marketing jobs, community manager jobs, DAO developer jobs, DeFi developer jobs"
        />
        <meta name="author" content="0xreeko" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>

      <div className="flex flex-col-reverse sm:gap-x-12 sm:flex-row pb-12 justify-between w-full">
        <div className="post w-full min-w-[33%]">
          <h1 className="text-3xl font-bold mb-6">Post a Role</h1>
          <div className="formDetails space-y-4">
            <div className="font-bold text-lg">
              About the Role (
              <span className="text-xs">
                <Link className="text-[#1DA1F2] underline" to={"/hiring-guide"}>
                  How to hire in Web3 & Web3Source
                </Link>
              </span>
              )
            </div>
            <div className="roleTitle">
              <div className="">Role Title</div>
              <input
                type="text"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ex. Web3 Developer.."
                className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] rounded-md tracking-widest w-full"
              />
            </div>
            <div className="roleDescription">
              <span className="ml-0.5 text-sm text-gray-600">
                Supports markdown format
              </span>
              <div className="mt-1">
                <textarea
                  name=""
                  id=""
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  cols={24}
                  rows={6}
                  placeholder="Job Description"
                  className="w-full rounded-md bg-black/20 focus:bg-black/60 border-2 outline-none transition border-gray-800 focus:border-[#ed194a] p-3 tracking-widest"
                ></textarea>
              </div>
            </div>
            <div className="roleAudience flex flex-col">
              <span className="mb-1 text-sm text-gray-600">Role Type</span>
              <div className="flex space-x-6">
                <select
                  className="rounded-md p-1 text-black peer-focus-within: "
                  id=""
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <optgroup label="Type">
                    <option value="">Unselected</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance">Freelance</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="roleTags">
              <span className="ml-0.5 mb-1 text-sm text-gray-600">
                Skills, tools, ecosystems - separate each tag by a comma.
              </span>
              <input
                type="text"
                required
                name=""
                id=""
                value={tags}
                onChange={(e) => handleTags(e.target.value)}
                className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] rounded-md tracking-widest w-full"
                placeholder="ex. DeFi, NFT, Solidity, Rust, AVAX, FTM.."
              />
            </div>
            <div className="roleSalary">
              <span className="ml-0.5 mb-1 text-gray-600 text-sm">
                In USD - We suggest to be as transparent as possible :)
              </span>
              <div className="flex space-x-3">
                <input
                  type="number"
                  required
                  value={baseSalary ? baseSalary : ""}
                  onChange={(e) => setBaseSalary(Number(e.target.value))}
                  placeholder="Base/min amount"
                  className="p-1 pl-3 w-1/2 text-sm outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
                />
                <input
                  type="number"
                  value={maxSalary ? maxSalary : ""}
                  onChange={(e) => setMaxSalary(Number(e.target.value))}
                  placeholder="Max amount"
                  className="p-1 pl-3 w-1/2 text-sm outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
                />
              </div>
            </div>
            <span className="flex items-center mb-1">
              <input type="checkbox" name="" id="" />
              <p className="ml-1">Ξ Pays In Crypto</p>
            </span>
            <div className="roleLocation">
              <div className="mb-2">Role Location </div>
              <span className="text-sm text-gray-600">
                Format: ex. city OR geo Region. Leave as 'Global' for fully
                remote roles.
              </span>
              <div className="flex flex-wrap space-x-4">
                <input
                  type="text"
                  value={"Global"}
                  placeholder="e.x. city OR geography"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
                />
                <span className="flex items-center mb-1">
                  <input type="checkbox" name="" id="" />
                  <p className="ml-1">🌍 Remote</p>
                </span>
              </div>
            </div>

            <div className="aboutYou space-y-4">
              <div className="font-bold text-lg">About You</div>
              <div className="roleStartup">
                <div className="mb-2">Startup Name</div>
                <input
                  type="text"
                  required
                  placeholder="ex. Web3Source"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
                />
              </div>
              <div className="roleTagline">
                <div className="mb-2">Startup Tagline</div>
                <div className="">
                  <textarea
                    name=""
                    id=""
                    required
                    cols={24}
                    rows={3}
                    placeholder="Tagline max (xx chars)"
                    className="w-full rounded-md bg-black/20 focus:bg-black/60 border-2 outline-none transition border-gray-800 focus:border-[#ed194a] p-3 tracking-widest"
                  ></textarea>
                </div>
              </div>
              <div className="roleSocial">
                <div className="mb-2">Twitter username (without @)</div>
                <input
                  type="text"
                  required
                  placeholder="ex. web3source"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
                />
              </div>
              <div className="startupSite">
                <div className="mb-2">Startup Site</div>
                <input
                  type="text"
                  required
                  placeholder="ex. https://startupName.com/"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
                />
              </div>
              <div className="applyURL">
                <div className="mb-2">Apply Link</div>
                <input
                  type="text"
                  required
                  placeholder="Enter external URL/email"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
                />
              </div>
              <div className="postDiscount">
                <div className="mb-2">Discount Code (optional)</div>
                <input
                  type="text"
                  placeholder="Enter discount code"
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
                />
              </div>
              <div className="roleBranding">
                <p className="flex items-center mb-2">Upload Branding Logo</p>
                <input type="file" accept="image/*" name="" id="" />{" "}
                {/*File Upload */}
              </div>
              <div className="postSurvey">
                <p className="mb-2">How did you hear about Web3Source?</p>
                <input
                  type="text"
                  required
                  name=""
                  id=""
                  className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] w-full"
                  placeholder="ex. recommended by ..."
                />
              </div>
            </div>
            <div className="networkSelect">
              <div className="mb-2">Select a network</div>
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">
                  EVM Networks
                </RadioGroup.Label>
                <div className="flex flex-wrap gap-x-2 gap-y-3 space-x-2">
                  {networks.map(
                    (network: {
                      name: string;
                      chainID: string;
                      abv: string;
                      bgStyle: string;
                    }) => (
                      <RadioGroup.Option
                        key={network.name}
                        value={network}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? `ring-2 ring-offset-2 ring-offset-${network.bgStyle} ring-white ring-opacity-60`
                              : ""
                          }
                  ${
                    checked
                      ? `bg-[#6387f1] bg-opacity-75 text-white`
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? `text-white` : "text-gray-900"
                                    }`}
                                  >
                                    {network.name}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="flex-shrink-0 text-white">
                                  <CheckIcon className="w-6 h-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    )
                  )}
                </div>
              </RadioGroup>
            </div>
            <button className="bg-[#ed194a] flex justify-center p-3 rounded-md w-full hover:bg-transparent border border-[#ed194a] text-white hover:text-[#ed194a]">
              <p className="flex items-center">
                Post Role 250{" "}
                <span className="mx-0.5">
                  <svg
                    data-name="86977684-12db-4850-8f30-233a7c267d11"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 2000 2000"
                  >
                    <path
                      d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"
                      fill="#2775ca"
                    />
                    <path
                      d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"
                      fill="#fff"
                    />
                    <path
                      d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </p>
            </button>
          </div>
        </div>
        <div className="preview w-full min-w-[33%] space-y-3 mb-12 sm:mb-0">
          <h1 className="text-3xl font-bold mb-6">Post Preview</h1>
          <div className="flex justify-between">
            <div className="details">
              <h1 className="text-xl font-bold">
                {!title
                  ? "Preview Title"
                  : title.length > 34
                  ? "MAX CHARACTER OVERFLOW::"
                  : title}
              </h1>
              <p>Startup name</p>
            </div>
            <div className="flex">
              <img
                className="flex-shrink-0 rounded-full w-12 h-12 object-cover object-center border-2 border-white border-opacity-25"
                src={brand}
              />
            </div>
          </div>
          <div className="h-0.5 bg-gray-800/30 rounded-r-lg rounded-l-lg"></div>
          <div className="core-details flex flex-col gap-y-3 items-center">
            <div className="left flex justify-between w-full">
              <p className="tracking-widest flex items-center text-xs">
                <span className="text-[#ed194a]/80 mr-1">{workIcon}</span>{" "}
                {type ? type : "Unselected"}
              </p>
              <p className="tracking-widest flex items-center text-xs">
                <span className="text-[#ed194a]/80 mr-1">{dollarIcon}</span>
                {baseSalary} {maxSalary ? `~ ${maxSalary}` : ""}
              </p>
              <p className="tracking-widest flex items-center text-xs">
                <span className="text-[#ed194a]/80 mr-1">{locationIcon}</span>
                Remote, Spain
              </p>
            </div>
            <button className="p-3 rounded-md bg-[#ed194a] hover:bg-transparent border border-[#ed194a] hover:text-[#ed194a] w-full">
              Apply Now 🪄
            </button>
          </div>
          <div className="h-0.5 bg-gray-800/30 rounded-r-lg rounded-l-lg "></div>
          <p className="max-w-3xl w-full whitespace-pre-line">
            {desc ? desc : "Preview Description"}
          </p>
          <div className="h-0.5 bg-gray-800/30 rounded-r-lg rounded-l-lg"></div>
          <div className="tags flex gap-x-4">
            {tags &&
              tags.map((i: string) =>
                i.length == 0 ? (
                  ""
                ) : (
                  <div className="bg-[#ed194a]/60 p-1 rounded-sm text-sm">
                    {i.length == 0 ? 0 : i}
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostARole;
