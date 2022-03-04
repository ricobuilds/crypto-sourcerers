interface ITag {
  skill: string;
  id: number;
}
const Tag = (props: ITag) => {
  return (
    <div
      className="text-sm text-[#ed194a] border border-gray-300 dark:border-gray-800 font-bold p-1 px-2 rounded-md"
      key={props.id}
    >
      {props.skill}
    </div>
  );
};
export default Tag;
