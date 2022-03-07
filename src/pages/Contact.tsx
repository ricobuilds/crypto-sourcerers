import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Contact Us • Web3Source • The #1 gateway for Web3 Jobs & Talent.
        </title>
        <meta name="canonical" content="https://web3source.co/contact" />
      </Helmet>
      <div className="flex flex-col items-center justify-center space-y-6 py-4 mb-6">
        <div className="contactir mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-sm mb-3">
            {" "}
            Maybe you work in a not-so-known pathway and want it to be included
            under Careers, have noticed a bug, thought of a suggestable feature,
            found any fraudulent behaviour, or simply just want to reach out -
            we welcome any messages and all will be seen by Enric :)
          </p>

          <p className="text-sm mb-3">
            You can reach out to us through{" "}
            <code className="font-semibold">
              <a
                className="text-[#ed194a]"
                href="mailto:dev@cryptosourcerers.co"
              >
                dev@<span className="">web3Source</span>.co
              </a>
            </code>
          </p>
          <p className="flex space-x-0.5">
            <div>Follow us on </div>
            <div>
              <a
                className="flex items-center"
                href="https://www.twitter.com/web3Source"
                target={"_blank"}
              >
                <span className="text-sky-800 dark:text-sky-400 font-medium">
                  {" "}
                  Twitter
                </span>
                <svg
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 fill-sky-400 transition hover:fill-sky-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
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
