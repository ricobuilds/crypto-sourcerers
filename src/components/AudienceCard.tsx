interface IAudienceCard {
  title: string;
  description: string;
}

const AudienceCard = (props: IAudienceCard) => {
  return (
    <div className="audienceCard">
      <div className="p-6 bg-white/20 border border-black rounded-md backdrop-blur-lg flex flex-col justify-between max-w-xs h-[420px]">
        <div className="card-title">{props.title}</div>
        <div className="card-content text-justify">{props.description}.</div>
      </div>
    </div>
  );
};
export default AudienceCard;
