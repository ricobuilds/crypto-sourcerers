import { warningIcon, removeIcon } from "./Icons";

interface bannerProps {
  handleBanner: () => void;
}

const WarningBanner = (props: bannerProps) => {
  return (
    <div className="warningComp bg-green-300 h-6 text-gray-800 text-[11px] flex whitespace justify-between items-center px-4">
      <span className="mr-2">{warningIcon}</span>
      <p className="text-left leading-none">
        Always make sure the URL is
        {": "}
        <span className="mx-0.5 tracking-widest font-bold">
          cryptosourcerers.co
        </span>{" "}
        - bookmark it to be safe.
      </p>
      <span className="ml-1 hover:cursor-wait" onClick={props.handleBanner}>
        {removeIcon}
      </span>
    </div>
  );
};
export default WarningBanner;
