import { Link } from "react-router-dom";
// import PricingCard from "../components/PricingCard";
import AudienceCard from "../components/AudienceCard";

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
          <h1 className="text-4xl md:text-7xl">
            Transferring your skills to the cryptosphere?
          </h1>
          <p>
            Tap into the new paradigm{" "}
            <span className="dark:text-indigo-500">today.🪄</span>
          </p>
          <div className="flex justify-center md:justify-start font-medium">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 pr-4 border border-gray-300 text-black"
            />
            <button className="cta text-md py-1 px-3 bg-[#6387f1] dark:bg-[#ed194a] text-white">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border dark:border-gray-800 border-gray-300  bg-white/20 dark:bg-black/30 backdrop-blur-lg h-[300px] flex justify-center items-center shadow-xl">
          <p>IMG</p>
        </div>
      </section>
      <section id="partners" className="py-12">
        <div className="relative flex flex-wrap justify-around m-4 text-center rounded-md border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
          <p className="absolute -top-4 left-1 text-xl font-bold ">
            Trusted Partners
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
            },
            {
              title: "Web3 Devs",
              description:
                "Those experienced in Web3, looking for their next Web3 role",
            },
            {
              title: "Web3 Enthusiasts",
              description:
                "Those with skills in tech and other industries and want to make an impact",
            },
            {
              title: "Ecosystems/Companies/Startups",
              description:
                "Web3 native teams, and 'Web2' businesses looking at crypto",
            },
          ].map((item) => (
            <AudienceCard title={item.title} description={item.description} />
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
              <p className="leading-relaxed mb-6">
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
              <p className="leading-relaxed mb-6">
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
              <p className="leading-relaxed mb-6">
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
              <p className="leading-relaxed mb-6">
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
          Payments accepted will be done in crypto{" "}
          {<span className="underline">only</span>}.
        </p>
        <div className="pricingInfo flex flex-wrap justify-evenly items-center w-full gap-x-6 gap-y-4">
          <div className="cards gap-x-12 gap-y-4 flex flex-wrap justify-center sm:justify-start">
            <div className="w-72 h-[420px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                ROLES
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
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
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
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
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
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-[#ed194a]/40 border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#ed194a] rounded">
                Button
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
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
            <div className="w-72 h-[420px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                BOUNTIES
              </h2>
              <h1 className="text-5xl text-gray-900 dark:text-gray-200 pb-4 mb-4 border-b border-gray-200 leading-none">
                $99
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
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
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
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
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
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-[#ed194a]/60 border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#ed194a] rounded">
                Button
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
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="max-w-xs w-full h-[300px] border">img</div>
        </div>
      </section>
      <section id="faq" className="py-12">
        <h1 className="text-3xl font-bold flex justify-center items-center mb-12">
          FAQ
        </h1>
        <p className="text-gray-600 flex justify-center text-center">
          Survey results after aggregating x,xxx submissions across Reddit,
          Twitter, and Discord
        </p>
        <div className="results">results from survey</div>
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
