const SneakPreview = () => {
  return (
    <section
      id="sneakPreview"
      className="relative w-full border-black py-24 px-0 backdrop-blur-lg"
    >
      <h1 className="text-3xl font-bold title-font text-[#6387f1] mb-12 text-center tracking-widest">
        Sneak Preview👀
      </h1>
      <div className="absolute right-0 bottom-1/4  w-52 h-52 bg-[#dbed19] rounded-full blur-3xl opacity-40"></div>
      <div className="absolute left-0 bottom-1/4  w-52 h-52 bg-[#f18263] rounded-full blur-3xl opacity-40"></div>
    </section>
  );
};
export default SneakPreview;
