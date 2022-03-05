import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us • Web3Source • The #1 gateway for Web3 Jobs & Talent.
        </title>
      </Helmet>
      <div className="flex flex-col items-center justify-center space-y-6 py-12 px-6">
        <div className="contactir max-w-lg space-y-6 mx-auto text-center">
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <p className=" text-lg text-center">
            {" "}
            Maybe you work in a not-so-known pathway and want it to be included
            under Careers, have noticed a bug, thought of a suggestable feature,
            found any fraudulent behaviour, or simply just want to reach out -
            we welcome any messages and all will be seen by Enric :)
          </p>

          <p>
            You can reach out to us through{" "}
            <code className="font-semibold">
              <a href="mailto:dev@cryptosourcerers.co">
                dev@<span className="">web3Source</span>.co
              </a>
            </code>
          </p>
          <p>
            Follow us on{" "}
            <a href="https://www.twitter.com/web3Source" target={"_blank"}>
              <span className="text-sky-800 dark:text-sky-400 font-medium">
                Twitter
              </span>
            </a>
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
