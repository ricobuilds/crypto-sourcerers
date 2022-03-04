interface ITag {
  skill: string;
  id: number;
}
const Tag = (props: ITag) => {
  return (
    <div
      className="text-sm text-[#ed194a] bg-[#f8c1ce] font-bold p-1 rounded-sm"
      key={props.id}
    >
      {props.skill}
    </div>
  );
};
export default Tag;
