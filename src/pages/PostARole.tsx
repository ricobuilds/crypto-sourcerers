import { dollarIcon, locationIcon, workIcon } from "../components/Icons";
const punk = require("../images/punk4596.png");
/* interface IRole {
  roleTitle: string; // role title
  description: string; // role's JD
  tags: []; // skills for fast search
  audience: string;
  type: string;
  baseSalary: number;
  maxSalary?: number;
  location: string[];
  twitteHandle: string;
  startupName: string;
  applyURI: string;
  discountCode?: string;
  brandLogo?: [];
  survey: string;
} */

const PostARole = () => {
  // const [post, setPost] = useState<IRole | null>(null);

  return (
    <div className="flex flex-col-reverse sm:gap-x-6 sm:flex-row pb-12 justify-between w-full">
      <div className="post w-full min-w-[33%]">
        <h1 className="text-3xl font-bold mb-6">Post a Role</h1>
        <div className="formDetails space-y-4">
          <div className="roleTitle">
            <p className="mb-2">Role Title</p>
            <input
              type="text"
              placeholder="Enter role title"
              className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] rounded-md tracking-widest w-full"
            />
          </div>
          <div className="roleDescription">
            <p className="mb-2">
              Role Description{" "}
              <span className="ml-0.5 text-sm text-gray-600">
                Supports markdown format
              </span>
            </p>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="In depth, let roleseekers know what you're looking for!"
              className="w-full rounded-md bg-black/20 focus:bg-black/60 border-2 outline-none transition border-gray-800 focus:border-[#ed194a] p-3 tracking-widest"
            ></textarea>
          </div>
          <div className="roleAudience">
            <p className="mb-2">
              Audience{" "}
              <span className="ml-0.5 text-sm text-gray-600">
                We recommend [Roleseeker] for permanent roles, and
                [Bountyseeker] for freelance/contract roles (e.g. interships,
                apprenticeships).
              </span>
            </p>
            <select
              className="rounded-md p-1 text-black audience"
              id="audience"
            >
              <optgroup label="Audience">
                <option value="roleseekers">Roleseeker</option>
                <option value="bountyseekers">Bountyseeker</option>
              </optgroup>
            </select>
          </div>
          <div className="roleType">
            <p className="mb-2">
              Type{" "}
              <span className="ml-0.5 text-sm text-gray-600">
                We recommend [Roleseeker] for permanent roles, and
                [Bountyseeker] for freelance/contract roles (e.g. interships,
                apprenticeships).
              </span>
            </p>
            <select className="rounded-md p-1 text-black " id="">
              <optgroup label="Types">
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Apprenticeship">Apprenticeship</option>
              </optgroup>
            </select>
          </div>
          <div className="roleTags">
            <p className="mb-2">
              Tags{" "}
              <span className="ml-0.5 text-sm text-gray-600">
                Separate each tag by a comma.
              </span>
            </p>
            <input
              type="text"
              name=""
              id=""
              className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] rounded-md tracking-widest w-full"
              placeholder="ex. DeFi, NFT, Solidity, Rust, Harmony One, Fantom.."
            />
          </div>
          <div className="roleSalary">
            <p className="mb-2">
              Salary{" "}
              <span className="ml-0.5 text-gray-600 text-sm">
                We suggest to be as transparent as possible :)
              </span>
            </p>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Base/min amount"
                className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
              />
              <input
                type="text"
                placeholder="Max amount"
                className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest"
              />
            </div>
          </div>
          <div className="roleLocation">
            <p className="mb-2">
              Location{" "}
              <span className="text-sm text-gray-600">
                Format: Remote or/and City, Country
              </span>
            </p>
            <input
              type="text"
              placeholder="e.x. Remote OR Remote/London, UK OR London, UK"
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="roleSocial">
            <p className="mb-2">
              Startup Twitter{" "}
              <span className="text-sm text-rose-500/90 ml-0.5">
                Without the @ symbol
              </span>
            </p>
            <input
              type="text"
              placeholder="Enter Twitter username"
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="roleStartup">
            <p className="mb-2">Startup Name</p>
            <input
              type="text"
              placeholder="Enter Startup name"
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="roleURI">
            <p className="mb-2">Apply Link</p>
            <input
              type="text"
              placeholder="Apply externl url/email for resumes"
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>
          <div className="postDiscount">
            <p className="mb-2">Discount Code</p>
            <input
              type="text"
              placeholder="Enter code"
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] tracking-widest w-full"
            />
          </div>

          <div className="roleBranding">
            <p className="flex items-center mb-2">
              Upload Branding Logo (+40{" "}
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
              )
            </p>
            <input type="file" name="" id="" /> {/*File Upload */}
          </div>
          <div className="postSurvey">
            <p className="mb-2">How did you hear about Web3Source?</p>
            <input
              type="text"
              name=""
              id=""
              className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition border-2 border-gray-800 focus:border-[#ed194a] w-full"
              placeholder="ex. recommended by X, through Discord/Twitter etc"
            />
          </div>
          <button className="bg-[#ed194a] flex justify-center p-3 rounded-md w-full hover:bg-transparent border border-[#ed194a] hover:text-[#ed194a]">
            <p className="flex items-center">
              Post a role 250{" "}
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
      <div className="preview w-full min-w-[33%] p-6 space-y-3 mb-12 sm:mb-0">
        seccion de muestra
        <div className="flex justify-between">
          <div className="details">
            <h1 className="text-xl font-bold">Example title</h1>
            <p>Startup name</p>
          </div>
          <div className="flex">
            <img
              alt="team"
              className="flex-shrink-0 rounded-full w-12 h-12 object-cover object-center bg-gradient-to-tr from-[#ed194a] to-pink-500 border-2 border-white border-opacity-25"
              src={punk}
            />
          </div>
        </div>
        <div className="h-0.5 bg-gray-800/30 rounded-r-lg rounded-l-lg"></div>
        <div className="core-details flex flex-wrap gap-y-3 items-center justify-between">
          <p className="tracking-widest flex items-center text-sm">
            <span className="text-[#ed194a]/80 mr-1">{workIcon}</span> Permanent
          </p>
          <p className="tracking-widest flex items-center text-sm">
            <span className="text-[#ed194a]/80 mr-1">{dollarIcon}</span>$50,000
          </p>
          <p className="tracking-widest flex items-center text-sm">
            <span className="text-[#ed194a]/80 mr-1">{locationIcon}</span>
            London, UK or Remote
          </p>
          <button className="p-3 rounded-md bg-[#ed194a] hover:bg-transparent border border-[#ed194a] hover:text-[#ed194a] w-full">
            Apply Now 🪄
          </button>
        </div>
        <div className="h-0.5 bg-gray-800/30 rounded-r-lg rounded-l-lg "></div>
        <p className="max-w-xl">
          this is the roles desc. this is the roles desc. this is the roles
          desc. this is the roles desc. this is the roles desc. this is the
          roles desc. this is the roles desc. this is the roles desc. this is
          the roles desc. this is the roles desc. this is the roles desc. this
          is the roles desc. this is the roles desc. this is the roles desc.
          this is the roles desc. this is the roles desc. this is the roles
          desc. this is the roles desc. this is the roles desc. this is the
          roles desc. this is the roles desc. this is the roles desc. this is
          the roles desc. this is the roles desc. this is the roles desc. this
          is the roles desc. this is the roles desc.{" "}
        </p>
        <div className="h-0.5 bg-gray-800/30 rounded-r-lg rounded-l-lg"></div>
        <div className="tags flex gap-x-4">
          <div className="bg-[#ed194a]/30 p-1 rounded-sm text-sm">Solidity</div>
          <div className="bg-[#ed194a]/30 p-1 rounded-sm text-sm">DeFi</div>
          <div className="bg-[#ed194a]/30 p-1 rounded-sm text-sm">NFT</div>
          <div className="bg-[#ed194a]/30 p-1 rounded-sm text-sm">
            Metaverse
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostARole;
