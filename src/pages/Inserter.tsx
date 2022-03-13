import { useState } from "react";

const Inserter = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [baseSalary, setBaseSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  return (
    <div className="inserter">
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
          <input type="checkbox" name="" id="" />
          <p className="ml-1">Ξ Pay In Crypto</p>
        </span>
        <div className="roleLocation">
          <div className="mb-2">Role Location </div>
          <span className="text-sm text-gray-600">
            Format: ex. city OR geo Region. Leave as 'Global' for fully remote
            roles.
          </span>
          <div className="flex flex-wrap space-x-4">
            <input
              type="text"
              value={"Global"}
              placeholder="e.x. city OR geography"
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
            />
            <span className="flex items-center mb-1">
              <input type="checkbox" name="" id="" checked={true} />
              <p className="ml-1">🌍 Remote</p>
            </span>
          </div>
        </div>

        <div className="aboutYou space-y-4">
          <div className="font-bold text-lg">About You</div>
          <div className="roleSocial">
            <div className="mb-2">Twitter username (without @)</div>
            <input
              type="text"
              required
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="startupSite">
            <div className="mb-2">Startup URL</div>
            <input
              type="text"
              required
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="applyURL">
            <div className="mb-2">External Apply URL/Email</div>
            <input
              type="text"
              required
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="roleBranding">
            <p className="flex items-center mb-2">Upload Branding Logo</p>
            <input type="file" accept="image/*" name="" id="" />{" "}
            {/*File Upload */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inserter;
