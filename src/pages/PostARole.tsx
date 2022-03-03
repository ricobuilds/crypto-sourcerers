// interface IRole {
//   title: string; // role title
//   salary: number; // di monies
//   description: string; // role's JD
//   tags: []; // skills for fast search
// }

const PostARole = () => {
  return (
    <>
      <div className="post max-w-[25%]">
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
        </div>
      </div>
    </>
  );
};
export default PostARole;
