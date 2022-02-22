const Partners = () => {
  return (
    <section id="partners" className="py-12">
      <div className="relative flex flex-wrap justify-around m-4 text-center rounded-md border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
        <p className="absolute -top-4 left-1 text-xl font-bold ">Trusted By</p>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
            2.7K
          </h2>
          <p className="leading-relaxed">Roleseekers</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
            1.8K
          </h2>
          <p className="leading-relaxed">Companies</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
            35
          </h2>
          <p className="leading-relaxed">Live Roles</p>
        </div>
      </div>
    </section>
  );
};
export default Partners;
