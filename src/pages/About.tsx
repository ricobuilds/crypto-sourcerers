import { Helmet } from "react-helmet-async";
import MissionStatement from "../components/About";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About CryptoSourcerers - The World's #1 Source for Blockchain Talent.
        </title>
      </Helmet>
      <MissionStatement />
    </>
  );
};
export default About;
