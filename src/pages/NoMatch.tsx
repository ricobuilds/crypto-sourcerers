const NoMatch = () => {
  return (
    <div className="learning mx-auto my-24 py-20 max-w-lg flex flex-col items-center justify-center">
      <div className="">
        <h1 className="text-8xl px-auto w-full">
          <span className="text-sky-500 font-bold">4</span>
          <span className="text-indigo-500 font-bold">0</span>
          <span className="text-[#ed194a] font-bold">4</span>
          <p
            className="text-9xl tracking-widest w-full italic text-right text-transparent"
            style={{ WebkitTextStroke: "2px #ed194a" }}
          >
            ERROR
          </p>
        </h1>
      </div>
      <p className="text-4xl text-center">no match, sori, pliz :V</p>
    </div>
  );
};
export default NoMatch;
