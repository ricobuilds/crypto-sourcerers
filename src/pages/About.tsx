import { Helmet } from "react-helmet-async";
import MissionStatement from "../components/About";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About - Crypto Sourcerers - Web3's #1 Gateway for Blockchain Jobs &
          Talent.
        </title>
      </Helmet>
      <MissionStatement />
    </>
  );
};
export default About;
