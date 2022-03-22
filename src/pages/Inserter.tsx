import { useState } from "react";
import { Moralis } from "moralis";
import { Filter } from "src/context/interfaces";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Options = require("../ecosystems.json");

const Inserter = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [type, setType] = useState("");
  const [skills, setSkills] = useState("");
  const [ecosystem, setEcosystem] = useState<string[]>([""]);
  const [cryptoOpt, setCryptoOpt] = useState<boolean>(true);
  const [remote, setRemote] = useState<boolean>(true);
  const [baseSalary, setBaseSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [exp, setExp] = useState(0);
  const [area, setArea] = useState("Global");
  const [applyLink, setApplyLink] = useState("");
  const [startupName, setStartupName] = useState("");
  const [tags, setTags] = useState<Filter>();

  const Vacancy = Moralis.Object.extend("Vacancy");
  const vacancy = new Vacancy();

  const handleEcosystems = (param: string) => {
    if (!ecosystem.includes(param)) {
      ecosystem.push(param);
      let _a = ecosystem;
      setEcosystem(_a);
      console.log(ecosystem);
    } else {
      // let _ar = ecosystem.filter((r) => r !== param);
      ecosystem.splice(ecosystem.indexOf(param), 1);
      let _ar = ecosystem;
      setEcosystem(_ar);
      console.log(ecosystem);
    }
  };

  const handlePost = () => {
    try {
      if (
        type !== "" &&
        title &&
        desc &&
        baseSalary &&
        applyLink &&
        area &&
        skills &&
        ecosystem
      ) {
        let _i = skills.split(", ");
        setTags({
          title: startupName,
          description: desc,
          type: type,
          skills: _i,
          location: [area, remote],
          salary: [baseSalary, maxSalary],
          ecosystem: ecosystem,
          experience: exp,
          benefits: [cryptoOpt],
        });
        vacancy
          .save({
            startupId: startupName,
            title: title,
            description: desc,
            type: type,
            skills: _i,
            baseSalary: baseSalary,
            maxSalary: maxSalary > baseSalary ? maxSalary : 0,
            location: [area, remote],
            experience: exp,
            applyLink: applyLink,
            ecosystem: ecosystem,
            benefits: [cryptoOpt],
            tags: tags,
          })
          .then(
            (success: any) => {
              console.log(success, "post success");
            },
            (error: any) => {
              console.log(error, "post error");
            }
          );
      } else {
        alert("There's a missing parameter!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inserter pb-12">
      <h1 className="text-4xl tracking-widest font-bold">Insert Role Form</h1>
      <div className="formDetails space-y-4">
        <div className="roleTitle">
          <div className="">Role Title</div>

          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] rounded-md tracking-widest w-full"
          />
        </div>
        <div className="roleDescription">
          <div className="">Role Title</div>
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
              className="w-full rounded-md bg-black/20 focus:bg-black/60 border-2 outline-none transition border-gray-800 focus:border-[#ed194a] p-3 tracking-widest"
            ></textarea>
          </div>
        </div>
        <div className="roleAudience flex flex-col">
          <span className="mb-1 text-sm text-gray-600">Role Type</span>
          <div className="flex space-x-6">
            <select
              className="rounded-md p-1 text-black "
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
        <div className="roleExp flex flex-col">
          <span className="mb-1 text-sm text-gray-600">
            Required Experience
          </span>
          <div className="flex space-x-6">
            <select
              className="rounded-md p-1 text-black peer-focus-within: "
              id=""
              value={exp}
              onChange={(e) => setExp(Number(e.target.value))}
            >
              <optgroup label="Experience">
                <option value={0}>Less than 1 year</option>
                <option value={1}>Min. 1 Year</option>
                <option value={2}>Min. 2 Years</option>
                <option value={3}>Min. 3 Years</option>
                <option value={4}>Min. 4 Years</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className="roleTags">
          <span className="ml-0.5 mb-1 text-sm text-gray-600">
            Skills & tools - separate each tag by a comma.
          </span>
          <input
            type="text"
            required
            name=""
            id=""
            value={skills}
            onChange={(e) => {
              setSkills(e.target.value);
            }}
            className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] rounded-md tracking-widest w-full"
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
          <input
            type="checkbox"
            name=""
            id=""
            checked={cryptoOpt}
            onChange={() => setCryptoOpt(!cryptoOpt)}
          />
          <p className="ml-1">Ξ Option To Pay In Crypto</p>
        </span>
        <div className="roleLocation">
          <div className="mb-2">Role Location </div>
          <span className="text-sm text-gray-600">
            Format: ex. city OR geo Region. Leave as 'Global' + ✅ Remote, for
            fully remote roles.
          </span>
          <div className="flex flex-wrap space-x-4">
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.x. city OR geography"
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
        <div className="applyURL">
          <div className="mb-2">Startup Name</div>
          <input
            type="text"
            required
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
          />
        </div>
        <div className="applyURL">
          <div className="mb-2">External Apply URL/Email</div>
          <input
            type="text"
            required
            value={applyLink}
            onChange={(e) => setApplyLink(e.target.value)}
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
          />
        </div>
        <div className="roleExp flex flex-col">
          <span className="mb-1 text-sm text-gray-600">
            Required Experience
          </span>
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
                    {Options.map((item: { value: string; label: string }) => (
                      <div className="flex items-center justify-between">
                        <div className="space-x-2 flex items-center">
                          <input
                            type="checkbox"
                            name={item.label}
                            value={item.value}
                            onClick={() => handleEcosystems(item.value)}
                          />
                          <span>{item.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <button
          className="bg-[#ed194a] w-full p-1 rounded-md"
          onClick={() => handlePost()}
        >
          {" "}
          Post Role
        </button>
      </div>
    </div>
  );
};
export default Inserter;
