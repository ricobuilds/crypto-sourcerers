import { Helmet } from "react-helmet-async";
import MissionStatement from "../components/About";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About - Web3Source - The #1 Gateway for Web3 Jobs & Talent.
        </title>
      </Helmet>
      <MissionStatement />
    </>
  );
};
export default About;
