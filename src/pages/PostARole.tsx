// interface IRole {
//   title: string; // role title
//   salary: number; // di monies
//   description: string; // role's JD
//   tags: []; // skills for fast search
// }

const PostARole = () => {
  return (
    <>
      <div className="post max-w-[33%]">
        <h1 className="text-3xl font-bold mb-6">Post a Role</h1>
        <div className="aboutRole">
          <h2 className="text-lg">About the role</h2>
          <p>Role Title</p>
          <input
            type="text"
            placeholder="Enter role title"
            className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 rounded-md tracking-widest w-full"
          />
          <p>Role Description</p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Let roleseekers know what you're looking for!"
            className="w-full rounded-md bg-black/20 focus:bg-black/60 ring-2 outline-none transition ring-gray-800 focus:ring-gray-600 p-3 tracking-widest"
          ></textarea>
          <p>
            Audience{" "}
            <span className="text-sm">
              We recommend Roleseeker for permanent roles, and Bountyseeker for
              freelance/contract roles.
            </span>
          </p>
          <select className="rounded-md p-1 text-black">
            <optgroup label="Audience">
              <option value="roleseekers">Roleseeker</option>
              <option value="bountyseekers">Bountyseeker</option>
            </optgroup>
          </select>
          <p>Tags</p>
          <input
            type="text"
            name=""
            id=""
            className="p-1 pl-3 outline-none bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 rounded-md tracking-widest w-full"
            placeholder="ex. DeFi, NFT, Solidity, Rust, Harmony One.."
          />
          <p>Company Name</p>
          <input
            type="text"
            placeholder="Company name"
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 tracking-widest w-full"
          />
          <p>Location</p>
          <input
            type="text"
            placeholder="Location e.x. Remote, Remote/UK, London"
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 tracking-widest w-full"
          />
          <input type="checkbox" name="" id="" /> <span>Remote</span>
          <p>Apply</p>
          <input
            type="text"
            placeholder="Apply url/email"
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 tracking-widest w-full"
          />
          <p>Discount Code</p>
          <input
            type="text"
            placeholder="Enter code"
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 tracking-widest w-full"
          />
          <p className="flex items-center">
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
          <input type="file" name="" id="" />
          <p>How did you hear about Crypto Sourcerers?</p>
          <input
            type="text"
            name=""
            id=""
            className="p-1 pl-3 outline-none rounded-md bg-black/20 focus:bg-black/60 transition ring-2 ring-gray-800 focus:ring-gray-600 w-full"
            placeholder="ex. recommended by X, through Discord/Twitter etc"
          />
        </div>
      </div>
    </>
  );
};
export default PostARole;
