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
        </div>
      </div>
    </>
  );
};
export default PostARole;
