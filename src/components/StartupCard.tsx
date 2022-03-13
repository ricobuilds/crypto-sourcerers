const StartupCard = () => {
  let emps = 339;
  return (
    <div className="startup p-3 border-[1px] border-gray-300 dark:border-gray-800/30">
      <img src="" alt="" className="rounded-full w-10 h-10 mb-3" />
      <div className="space-y-3">
        <h1 className="font-bold text-md">Avalanche</h1>
        <span className="p-1 px-3 rounded-full bg-gray-800 dark:bg-[#f5f3fb] text-sm text-white dark:text-black">
          {emps >= 251
            ? "+ 250 employees"
            : emps <= 250 && emps >= 51
            ? "51 - 250 employees"
            : emps <= 50 && emps >= 11
            ? "11 - 50 employees"
            : emps < 10
            ? "1 - 10 employees"
            : null}
        </span>
        <p className="text-sm">
          Avalache is an EVM ecosystem that takes advantage of zkRollups to do
          ... better.
        </p>
      </div>
    </div>
  );
};
export default StartupCard;
