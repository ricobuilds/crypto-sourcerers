const Careers = () => {
  return (
    <div className="careers flex flex-col px-auto lg:px-auto py-4 space-y-4  ">
      <div className="text-4xl flex items-baseline tracking-widest font-medium">
        <span>Careers </span>
        <span className="text-xs">
          All the available pathways towards getting a blockchain related role.
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 ">
        {[
          "Blockchain Developer",
          "Blockchain Engineer",
          "Security Auditor",
          "Community Manager",
          "Marketing Specialist",
          "Metatect",
        ].map((item) => (
          <div className="px-3 py-1 bg-gray-200 dark:bg-[#141419] flex rounded-md">
            <div className="img"></div>
            <div className="right">
              <h2 className="text-xl underline">{item}</h2>
              <p>This role pertains to the use of {item} to work on...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Careers;
