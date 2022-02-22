import { Link } from "react-router-dom";
// import PricingCard from "../components/PricingCard";
import AudienceCard from "../components/AudienceCard";
import heroIcon from "../images/magic-trick-dynamic-color.png";
import web2devs from "../images/computer-front-color.png";
import web3devs from "../images/lab-dynamic-color.png";
import web3enth from "../images/axe-dynamic-color.png";
import biz from "../images/travel-front-color.png";
import bankLocker from "../images/locker-dynamic-color.png";

const HomePage = () => {
  return (
    <>
      <section
        id="home"
        className="relative container mx-auto flex py-24 lg:flex-row space-y-6 flex-col items-center"
      >
        <div className="absolute right-8 bottom-9 w-64 h-64 bg-[#ed194a] rounded-full blur-3xl opacity-50 dark:opacity-70"></div>
        <div className="absolute right-56 top-24 w-64 h-64 bg-[#6387f1] rounded-full blur-3xl opacity-50 dark:opacity-70"></div>
        <div className="text space-y-6">
          <h1 className="text-4xl md:text-7xl ">
            Transferring your skills to the cryptosphere?
          </h1>
          <p className="tracking-widest">
            Tap into the new paradigm{" "}
            <span className="dark:text-indigo-500">today.🪄</span>
          </p>
          <div className="flex justify-center md:justify-start font-medium">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 pr-8 border border-gray-300 text-black rounded-l-md"
            />
            <button className="cta text-md py-1 px-3 bg-[#6387f1] dark:bg-[#ed194a] text-white rounded-r-md">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-[300px] flex justify-center items-center">
          <img src={heroIcon} />
        </div>
      </section>
      <section id="partners" className="py-12">
        <div className="relative flex flex-wrap justify-around m-4 text-center rounded-md border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
          <p className="absolute -top-4 left-1 text-xl font-bold ">
            Trusted By
          </p>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              2.7K
            </h2>
            <p className="leading-relaxed">Roleseekers</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              1.8K
            </h2>
            <p className="leading-relaxed">Companies</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              35
            </h2>
            <p className="leading-relaxed">Live Roles</p>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="relative flex flex-wrap justify-around m-4 text-center rounded-md border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
          <p className="absolute -top-4 left-1 text-xl font-bold">Live Stats</p>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#6387f1]">
              2.7K
            </h2>
            <p className="leading-relaxed">Roleseekers</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#6387f1]">
              1.8K
            </h2>
            <p className="leading-relaxed">Companies</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#6387f1]">
              35
            </h2>
            <p className="leading-relaxed">Live Roles</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#6387f1]">
              96.8K
            </h2>
            <p className="leading-relaxed">Avg. Salary ($)</p>
          </div>
        </div>
      </section>
      <section
        id="sneakPreview"
        className="relative w-full border-black py-24 px-0 backdrop-blur-lg"
      >
        <h1 className="text-3xl font-bold title-font text-[#6387f1] mb-12 text-center tracking-widest">
          Sneak Preview👀
        </h1>
        <div className="absolute right-0 bottom-1/4  w-52 h-52 bg-[#dbed19] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute left-0 bottom-1/4  w-52 h-52 bg-[#f18263] rounded-full blur-3xl opacity-40"></div>
      </section>
      <section
        id="features"
        className="relative w-full border-black py-24 px-0 backdrop-blur-lg"
      >
        <h1 className="text-3xl font-bold title-font text-[#6387f1] mb-12 text-center tracking-widest">
          Features
        </h1>
        <div className="absolute left-0 bottom-40  w-52 h-52 bg-[#ed19cd] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute right-0  w-52 h-52 bg-[#b363f1] rounded-full blur-3xl opacity-40"></div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#F3F6F9] text-[#6387f1] flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#6387f1] text-lg title-font font-medium mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a
              className="mt-3 text-[#6387f1] inline-flex items-center"
              href="#features"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#6387f1] text-lg title-font font-medium mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a
              className="mt-3 text-[#6387f1] inline-flex items-center"
              href="#features"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-[#F3F6F9] text-[#6387f1] flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#F3F6F9] text-[#6387f1] flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#6387f1] text-lg title-font font-medium mb-2">
              The 400 Blows
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a
              className="mt-3 text-[#6387f1] inline-flex items-center"
              href="#features"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="audience" className="py-12">
        <h1 className="text-3xl font-bold flex justify-center items-center mb-12">
          Audience
        </h1>
        <div className="cards gap-x-6 gap-y-4 flex flex-wrap justify-center sm:justify-around">
          {[
            {
              title: "Web2 Devs",
              description:
                "Those expericienced in tech at all levels, and are looking to transition",
              logo: web2devs,
            },
            {
              title: "Web3 Devs",
              description:
                "Those experienced in Web3, looking for their next Web3 role",
              logo: web3devs,
            },
            {
              title: "Web3 Enthusiasts",
              description:
                "Those with skills in tech and other industries and want to make an impact",
              logo: web3enth,
            },
            {
              title: "Ecosystems/Companies/Startups",
              description:
                "Web3 native teams, and 'Web2' businesses looking at crypto",
              logo: biz,
            },
          ].map((item) => (
            <AudienceCard
              title={item.title}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </section>
      <section id="socialProof" className="py-24 mx-auto">
        {/* Testimonials */}
        <h1 className="text-3xl title-font font-bold text-[#ed194a] mb-12 text-center tracking-widest">
          Testimonials
        </h1>
        <div className="flex flex-wrap m-0 w-full">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 dark:text-gray-800">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center" href="#socialProof">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 dark:text-gray-800">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center" href="#socialProof">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 dark:text-gray-800">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center" href="#socialProof">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white backdrop-blur-lg p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 dark:text-gray-800">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center" href="#socialProof">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="px-5 py-12">
        <h1 className="text-3xl font-bold flex justify-center items-center mb-12">
          Pricing
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Following the ethos of cryptocurrency, you can transparently see our
          pricing below and what we offer. Payments accepted will be done in
          crypto {<span className="underline">only</span>}.
        </p>
        <div className="pricingInfo flex flex-wrap justify-center items-center w-full gap-x-12 gap-y-4">
          <div className="cards gap-x-12 gap-y-4 flex flex-wrap justify-center sm:justify-start">
            <div className="w-72 h-[420px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                VACANCY POSTS
              </h2>
              <h1 className="text-5xl text-gray-900 dark:text-gray-200 pb-4 mb-4 border-b border-gray-200 leading-none">
                $250
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Global pool of roleseekers
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Full/part time, contract, intership, apprenticeship gigs
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Posts across our social profiles and newsletter
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Get multiple views - but make it global
              </p>
              <button className="flex items-center mt-auto text-white bg-[#ed194a]/40 border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#ed194a] rounded">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="max-w-xs w-full h-[300px]">
            <img src={bankLocker} alt="prop" />
          </div>
        </div>
      </section>
      <section id="faq" className="py-12 mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold flex justify-center items-center mb-12">
          FAQs
        </h1>
        <p className="text-gray-600 flex justify-center text-center">
          Gathered from questions asked across platforms like Twitter and
          Discord
        </p>
        <div className="results divide-y-[1px] divide-slate-800">
          {[
            {
              req: "What is Web3",
              res: "Our reponse to this is that, Web3 is the term that describes the digital industrial revolution that we are moving into. The DOT com era we've experienced, such as Google, Youtube, and Spotify, is considered to be 'Web2' - Web3 encompasses themes like Blockchain, Decentralised Finance, DAOs, Metaverse, and Extended Reality, just to name a few. These are themes that are changing how we interact with each other to another level as we write this.",
            },
            {
              req: "Why should I invest in Web3",
              res: "Web3 provides a lot of investment initiatives and angles, that allow you, or anyone else, to earn some good returns on your money, compared to what you get in the current financial structure - investment opportunities that we will highly likely never see in our lifetimes. The main incentive of investing in Web3 as you are ready this, is the opportunity to invest in this new phase of technology at its infancy, putting you in the best financial position before the point of mass global adoption. The banks and the big guys are even working towards introducing their own crypto, CBDCs, as a replacement of current cash, which should hint to you what is to come - why not invest in things now, that future YOU will have to use anyways, anon?",
            },
            {
              req: "What can I do with Web3",
              res: "This is just one example out of many - you can become your own bank and do everything that the banks do, by using DeFi platforms that allow the borrowing and lending of crypto assets. Say you have 1K in USDC, you can lend that thousand through the platform and earn interest upon it, then borrow against that (sometimes even up to 75%!). At this point you've got many options, you could either relend the borrowed amount to gain even more interest, invest it in a passive income generator, or even invest it in a riskier asset YOU feel convicted that will yield high returns. You would of course have to repay the borrowed amount plus its accrued interest, which can average at 3-10% YEARLY. Forgot to mention, for some of these crypto assets, you can even get paid through positive interest for borrowing them ;)",
            },
            {
              req: "How do I get into Web3",
              res: "By learning and participating! Ask questions, connect with others and create your own applications. As a Buildspace alumni, joining the community was an element that helped when transferring my skills to blockchain as a frontend dev :)",
            },
            {
              req: "Do I need to learn programming to get into Web3 and/or tech",
              res: "Nope! This new phase of tech is where creativity is fully embraced, meaning, that there is room for you to use your skills and find your niche. Learning how the tech works will for sure give you an advantage though.",
            },
            {
              req: "I’m new to programming, what should I learn first",
              res: "If you are looking to work more on UIs (user interfaces), we would recommend learning the basics (HTML, CSS, JS), which would provide you with the fundamentals to create applications. Else, you could start by learning Solidity - there are many resources online like SolidityByExample and Smart Contract Programmer.",
            },
            {
              req: "What technologies should I learn",
              res: "We'd suggest learning Solidity first as it is more beginner-friendly if you are new, or come from a Javascript-ish background - the legend Nader Dabit has a series of fullstack courses which include industry standard tooling used alongside Solidity. Another popular and in-great-demand tool is Rust!",
            },
            {
              req: "Where can I find web3 internships and remote work in general",
              res: "Well, you have come to the right place! Crypo Sourcerers aims to be such a platform that allows you, the roleseeker, to find roles across the GLOBE.",
            },
            {
              req: "What is the salary of a Web3 developer",
              res: "The range we have seen for a Web3 developer's salary is around 60K USD at minimum to +100K USD max. Heck, if you've got some good transferrable experience, you could even be reaching the 200K and 300K USD realms.",
            },
            {
              req: "Those salaries??",
              res: "Yep xD it signals the great demand for individuals with the knowledge and/or passion to learn Web3 roles. You can for sure earn that much if you can demonstrate how you can mesh your current skills with Web3 and provide value to the ecosystem ;)",
            },
            {
              req: "I'm a recruiter/founder, why should I use Crypto Sourcerers",
              res: "Well, we want to assist the Web3 transitioning period and beyond by connecting with roleseekers, blockchain ecosystems, and businesses (Web2 and Web3) worldwide. Crypto Sourcerers aims to become the world's #1 marketplace for blockchain talent - by using this gateway, you can easily scale and build your regional branches when you wish to do so :P",
            },
          ].map((item) => (
            <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                  {item.req}?
                </h2>
                <p className="leading-relaxed">{item.res}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="contactRedirect"
        className="py-12 flex justify-center items-center space-x-6"
      >
        {/* Contact */}
        <p>Want to reach out? </p>
        <Link to={"/contact"}>
          <button className="py-3 px-9 rounded-md bg-[#ed194a] text-white ">
            Contact Us
          </button>
        </Link>
      </section>
    </>
  );
};
export default HomePage;
