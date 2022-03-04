import { Helmet } from "react-helmet-async";
const mailIcon = require("../images/mail-iso-color.png");
const Newsletter = () => {
  return (
    <>
      <Helmet>
        <title>
          Newsletter - Web3Source - The #1 Gateway for Web3 Jobs & Talent.
        </title>
      </Helmet>
      <div className="newsletter my-auto w-full h-full flex flex-col mx-auto">
        <h1 className="text-3xl font-bold">Newsletter</h1>
        <div className="h-[70vh] flex items-center w-full justify-center">
          <div className="left">
            <div className="max-w-xl flex items-center">
              <p>
                We want to support you on your journey into Web3 and beyond,
                whether you're attemping to get your foot through the door, or
                looking to adopt Web3 with innovation and change in mind, we,
                Web3Source, will strive to do our best in lending out a helping
                hand :)
              </p>
              <img src={mailIcon} alt="mail" className="w-64 h-auto" />
            </div>
            <div id="revue-embed">
              <form
                action="https://www.getrevue.co/profile/cryptosourcerers/add_subscriber"
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
              >
                <div className="flex mb-3">
                  <div className="revue-form-group flex justify-center items-center">
                    <input
                      className="revue-form-field p-2 pr-8 border border-gray-300 text-black rounded-l-md"
                      placeholder="Your email address..."
                      type="email"
                      name="member[email]"
                      id="member_email"
                    />
                    <input
                      className="cta text-md h-full px-3 bg-[#ed194a] text-white rounded-r-md hover:cursor-pointer"
                      type="submit"
                      value="Subscribe"
                      name="member[subscribe]"
                      id="member_submit"
                    />
                  </div>
                </div>
                <div className="revue-form-footer text-sm">
                  By subscribing, you agree with to receive job updates only,
                  and Revue’s{" "}
                  <a
                    target="_blank"
                    href="https://www.getrevue.co/terms"
                    className="text-gray-600 underline dark:text-[#ed194a]"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    href="https://www.getrevue.co/privacy"
                    className="text-gray-600 underline dark:text-[#ed194a]"
                  >
                    Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
