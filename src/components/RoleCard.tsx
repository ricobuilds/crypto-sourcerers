// tis for mapping over every available job.
const RoleCard = () => {
  return (
    <div className="roleCard relative flex justify-between items-center border-l-2 border-[#ed194a] p-4 bg-[#ebebeb] min-w-xl w-full h-[100px] rounded-md text-black">
      <div className="absolute top-0 right-0 p-1 bg-rose-500 rounded-tr-md">
        <p className="text-[#ebebeb] text-[11px]"> 4h ago</p>
      </div>
      <div className="left">
        <h2 className="font-bold">Role title</h2>
        <div className="coreDetails">
          <p className="text-gray-600 text-sm">
            {"Remote, Anywhere"} - {"50,000"} - {"Permanent"}
          </p>
        </div>
      </div>
      <div className="right">
        <img src="" alt="brand-logo" className="h-12 w-auto" />
        <button className="bg-transparent border border-[#ed194a] hover:bg-[#ed194a]">
          Show More
        </button>
      </div>
    </div>
  );
};
export default RoleCard;
