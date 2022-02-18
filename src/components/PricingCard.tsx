interface IPricingCard {
  title: string;
  price: number;
}

const PricingCard = (props: IPricingCard) => {
  return (
    <div className="pricingCard">
      <div className="p-6 bg-white/20 border border-black rounded-md backdrop-blur-lg flex flex-col justify-between w-64 h-[420px]">
        <div className="card-title">{props.title}</div>
        <div className="card-content">Pricing: ${props.price}</div>
        <div className="cta">Button</div>
      </div>
    </div>
  );
};
export default PricingCard;
