const HomePage = () => {
  return (
    <>
      <div className="home relative container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="absolute right-8 bottom-9 w-64 h-64 bg-[#ed194a] rounded-full blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute right-56 top-24 w-64 h-64 bg-[#6387f1] rounded-full blur-3xl opacity-70 animate-inverseBlob"></div>
        <div className="text space-y-6">
          <h1 className="text-6xl xl:text-8xl">
            Transferring your skills to the cryptosphere?
          </h1>
          <p>Tap into the new paradigm today.</p>
          <div className="flex justify-start space-x-4 font-medium">
            <button className="cta text-lg py-1 px-3 bg-[#ed194a] text-white rounded-md">
              Sign Up
            </button>
            <input
              type="text"
              placeholder="Subscribe to newsletter"
              className="p-2 pr-6 border border-gray-300 rounded-md text-black"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border bg-black/30 backdrop-blur-lg h-[300px] flex justify-center items-center shadow-xl">
          <p>IMG</p>
        </div>
      </div>
    </>
  );
};
export default HomePage;
