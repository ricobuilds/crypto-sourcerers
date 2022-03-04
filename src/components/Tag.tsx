interface ITag {
  skill: string;
  id: number;
}
const Tag = (props: ITag) => {
  return (
    <div
      className="text-sm text-[#ed194a] dark:text-[#f0d4db] bg-[#f0d4db] dark:bg-[#a12743] font-bold p-1 rounded-sm"
      key={props.id}
    >
      {props.skill}
    </div>
  );
};
export default Tag;
