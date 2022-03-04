import { Helmet } from "react-helmet-async";
import RoleCard from "src/components/RoleCard";

const Roles = () => {
  return (
    <>
      <Helmet>
        <title>
          Roles - Crypto Sourcerers - World's #1 Gateway for Web3 Jobs & Talent.
        </title>
      </Helmet>
      <div className="flex py-12 border-amber-500 border w-full">
        <div className="w-1/4">filtering system</div>
        <div className="grid gap-y-3 justify-items-center w-3/4">
          <RoleCard />
        </div>
      </div>
    </>
  );
};
export default Roles;
