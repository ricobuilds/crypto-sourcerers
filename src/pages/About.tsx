import { Helmet } from "react-helmet-async";
import MissionStatement from "../components/About";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About - Crypto Sourcerers - World's #1 Gateway for Web3 Jobs & Talent.
        </title>
      </Helmet>
      <MissionStatement />
    </>
  );
};
export default About;
