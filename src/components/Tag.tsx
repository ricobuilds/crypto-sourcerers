const Tag = (asset: string, id: number) => {
  return (
    <div
      className="text-sm text-[#ed194a] bg-[#f8c1ce] font-bold p-1 rounded-sm"
      key={id}
    >
      {asset}
    </div>
  );
};
export default Tag;
