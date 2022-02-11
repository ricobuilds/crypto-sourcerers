const Careers = () => {
  return (
    <div className="careers flex flex-col px-auto lg:px-auto py-12 space-y-4  ">
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
          "Community Maneger",
          "Marketing Specialist",
        ].map((item) => (
          <div className="px-3 py-1 bg-gray-700 rounded-md">
            <h2 className="header">{item}</h2>
            <p>This reole pertains to the use of {item} to work on...</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Careers;
