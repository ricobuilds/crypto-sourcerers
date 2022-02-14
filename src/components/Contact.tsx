import { contactIcon } from "../components/Icons";

const Contact = () => {
  return (
    <div className="flex flex-col items-center space-y-12 pt-12 pb-6">
      <div className="contactir space-y-6 mx-auto text-center">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <p className=" text-lg">
          {" "}
          Whether if you work in a not-so-known pathway and want it to be
          included under Careers, have noticed a bug, thought of a feature you
          would suggest, found any fraudulent behaviour, or simply just want to
          reach out, we welcome any messages :)
        </p>

        <p>
          You can reach out to us through{" "}
          <code className="font-semibold">
            <a href="mailto:dev@cryptosourcerers.co">
              dev@<span className="text-transparent">cryptosourcerers</span>.co
            </a>
          </code>
        </p>
        <p>
          Follow us on{" "}
          <span className="text-sky-800 dark:text-sky-400 font-medium">
            Twitter
          </span>
        </p>
      </div>
      <div className="image">
        <span>{contactIcon}</span>
      </div>
    </div>
  );
};
export default Contact;
