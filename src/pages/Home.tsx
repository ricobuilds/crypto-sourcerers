import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { GlobeIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { Moralis } from "moralis";
const heroIcon = require("../images/magic-trick-dynamic-color.webp");
const bankLocker = require("../images/locker-dynamic-color.webp");
const missionIcon = require("../images/rocket-dynamic-color.webp");

const HomePage = () => {
  const [liveRoles, setLiveRoles] = useState<string | number>("-");
  const [avgSalary, setAvgSalary] = useState<string | number>("-");
  (async () => {
    const _q = new Moralis.Query("Vacancy");
    let res = await _q.find();
    setLiveRoles(res.length);
    let _r =
      res.reduce((prev, current) => prev + current.attributes.baseSalary, 0) /
      res.length;
    setAvgSalary(_r);
  })();

  return (
    <>
      <Helmet>
        <title>Web3Source • World's #1 Gateway for Web3 Jobs & Talent.</title>
        <meta name="copyright" content="Web3Source, all rights reserved." />
        <meta
          name="description"
          content="Quick & Easily Post Your Vacancy With One Click. Find Your Perfect Job / Niche In Web3 Today, Source The Best Web3 Talent Now."
        />
        <link rel="canonical" href="https://web3source.co/" />
        <meta
          name="keywords"
          content="web3 developer jobs, NFT developer jobs, blockchain developer jobs, metaverse developer jobs, crypto developer jobs, augmented reality developer jobs, virtual reality developer jobs, marketing jobs, community manager jobs, DAO developer jobs, DeFi developer jobs"
        />
        <meta name="author" content="0xreeko" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      {/* main */}
      <section
        id="home"
        className="relative container mx-auto flex py-12 lg:flex-row space-y-6 flex-col items-center"
      >
        <div className="absolute right-8 bottom-9 w-32 sm:w-64 h-32 sm:h-64 bg-[#ed194a] rounded-full blur-3xl opacity-50 dark:opacity-70"></div>
        <div className="absolute right-56 bottom-9 sm:bottom-auto sm:top-24 w-32 sm:w-64 h-32 sm:h-64 bg-[#6387f1] rounded-full blur-3xl opacity-50 dark:opacity-70"></div>
        <div className="text space-y-6">
          <h1 className="text-3xl md:text-6xl ">
            Transferring your skills to the cryptosphere?
          </h1>
          <p className="tracking-widest">
            <span className="tracking-normal">
              Get notified when we're live.{" "}
            </span>
            Tap into the new paradigm{" "}
            <span className="dark:text-indigo-500">today.🪄</span>
          </p>
          <div className="flex flex-col justify-center md:justify-start font-medium">
            <div id="revue-embed">
              <form
                action="https://www.getrevue.co/profile/cryptosourcerers/add_subscriber"
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
              >
                <div className="flex mb-3">
                  <div className="revue-form-group">
                    <input
                      className="revue-form-field p-2 pr-8 border border-gray-300 text-black sm:rounded-l-md"
                      placeholder="Your email address..."
                      type="email"
                      name="member[email]"
                      id="member_email"
                    />
                    <input
                      className="cta text-md h-full px-3 bg-[#ed194a] text-white sm:rounded-r-md hover:cursor-pointer"
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
        <div className="lg:w-full flex justify-center items-center">
          <img
            src={heroIcon}
            // srcSet={`${heroIconSM} 300w, ${heroIcon} 768w`}
            className="h-40 sm:h-72 w-40 sm:w-72"
          />
        </div>
      </section>
      {/* stats */}
      <section className="stats">
        <div className="relative flex flex-wrap justify-around m-4 text-center rounded-md border border-gray-200 dark:border-gray-800 backdrop-blur-lg">
          <p className="absolute -top-4 left-1 text-xl font-bold">
            Live Stats *
          </p>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              -
            </h2>
            <p className="leading-relaxed">Roleseekers</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              -
            </h2>
            <p className="leading-relaxed">Applications</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h3 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              {liveRoles}
            </h3>
            <p className="leading-relaxed">Live Roles</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#ed194a]">
              {avgSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h2>
            <p className="leading-relaxed">Avg. Salary ($)</p>
          </div>
        </div>
        <p className="italic">
          * All data provided is current, and computed with active vacancy
          postings (Avg Salary is calculated from all active roles right now on
          the platform).
        </p>
      </section>
      {/* mission */}
      <section
        id="mission"
        className="relative container mx-auto flex flex-col items-center justify-center py-24"
      >
        <h2 className="text-3xl font-bold mb-3">Mission</h2>
        <div className="flex flex-col items-center">
          <div className="text-center space-y-6">
            <p>
              It’s obvious - the global events over the last two years have
              exposed the inefficiencies of our current paradigm, having an
              impact of the way we interact on so many levels; supply chain
              being a primary example. This has invigorated efforts to solve
              these orchestrated problems through digital alternatives -
              blockchain. The migration to this new digital era means that,
              becoming acquainted with technology will help one stay current and
              be in the best position possible, as everything we do, will
              undergo a digital reform - an important factor to consider as the
              labour market and competition shifts from regional to global,
              through remote opportunities.
            </p>
            <p>
              We have dedicated this gateway to help roleseekers find lucrative
              opportunities with Web3 startups, and for ‘Web2’ and Web3 teams to
              find talent that is already in Web3, or looking to transition to
              Web3. The essence of our mission is to assist the Web3 ecosystem
              through the ongoing transitionary period to the point of mass
              global adoption, and beyond.
            </p>
          </div>
          <img
            src={missionIcon}
            alt="rocket"
            className="h-40 sm:h-72 w-40 sm:w-72"
          />
        </div>
      </section>
      <section
        id="features"
        className="w-full border-black py-12 px-0 backdrop-blur-lg"
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full sm:divide-x-[1px] sm:divide-gray-200 sm:dark:divide-gray-800">
          <div className="tips flex flex-col text-center items-center p-3 max-w-xs">
            <span className="text-yellow-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {/* <p>
              Get results in a flash by entering keywords (skills, tools etc)
              ex. rust defi remote
            </p> */}
            <p>Selecting your desired parameters and get results in a jiffy</p>
          </div>
          <div className="tips flex flex-col text-center items-center p-3 max-w-xs">
            <span className="text-rose-500">
              <LocationMarkerIcon className="w-6- h-6" />
            </span>
            <p>Find your dream Web3 role that is located in a city near you</p>
          </div>
          <div className="tips flex flex-col text-center items-center p-3 max-w-xs">
            <span className="text-sky-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p>
              Narrow down by selecting your desired ecosystem - FTM, AVAX, MATIC
              👀
            </p>
          </div>
        </div>
      </section>
      {/* features */}
      <section
        id="benefits"
        className="relative w-full border-black py-24 px-0 backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold flex justify-center items-center mb-12">
          Why Web3Source?
        </h2>
        <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 dark:border-gray-800 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#F3F6F9] text-[#ed194a] flex-shrink-0">
            <GlobeIcon className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-[#ed194a] text-lg title-font font-medium mb-2">
              Borderless Access
            </h3>
            <p className="leading-relaxed text-base">
              Tap in, and access a global pool of talented roleseekers and
              bountyseekers, that are actively looking to contribute in Web3.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 dark:border-gray-800 sm:flex-row flex-col ">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-[#ed194a] text-lg title-font font-medium mb-2">
              Wide Audience
            </h3>
            <p className="leading-relaxed text-base">
              Have an intership available for new graduates? Looking for a
              community manager? Want to launch your blockchain initiative and
              in urgent need of a Blockchain Engineer? With Web3Source, you can
              reach your target audience on the global stage.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-[#F3F6F9] text-[#ed194a] flex-shrink-0">
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
        </div>
        <div className="flex items-center lg:w-full mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#F3F6F9] text-[#ed194a] flex-shrink-0">
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
            <h3 className="text-[#ed194a] text-lg title-font font-medium mb-2">
              Insta-Marketing
            </h3>
            <p className="leading-relaxed text-base">
              Your vacancy posts will be live instantly upon payment
              confirmation, then shared across our social profiles and
              newsletter. Get your vacancies viewed by thousands of eyes across
              the world.
            </p>
          </div>
        </div>
      </section>
      {/* audience */}
      <section id="audience" className="py-12">
        <h2 className="text-3xl font-bold flex justify-center items-center mb-12">
          Audience
        </h2>
        <div className="cards grid sm:grid-cols-4">
          <div className="audienceCard group">
            <div className="p-6 hover:bg-[#ebebeb]/80 hover:dark:bg-[#1d1d20]/40 border border-gray-800/5 backdrop-blur-lg flex flex-col items-center max-w-xs">
              <div className="card-title font-semibold mb-3 tracking-widest text-lg">
                Web2 Devs
              </div>
              <div className="card-content text-center mb-6">
                Those experienced in tech at all levels, and are looking to
                transition.
              </div>
            </div>
          </div>
          <div className="audienceCard group">
            <div className="p-6 hover:bg-[#ebebeb]/80 hover:dark:bg-[#1d1d20]/40 border border-gray-800/5 backdrop-blur-lg flex flex-col items-center max-w-xs">
              <div className="card-title font-semibold mb-3 tracking-widest text-lg">
                Web3 Devs
              </div>
              <div className="card-content text-center mb-6">
                Those experienced in Web3, looking for their next Web3 role.
              </div>
            </div>
          </div>
          <div className="audienceCard ">
            <div className="p-6 group hover:bg-[#ebebeb]/80 hover:dark:bg-[#1d1d20]/40 border border-gray-800/5 backdrop-blur-lg flex flex-col items-center max-w-xs">
              <div className="card-title font-semibold mb-3 tracking-widest text-lg">
                Web3ficionados
              </div>
              <div className="card-content text-center mb-6">
                Those with skills in tech and other industries and want to make
                an impact.
              </div>
            </div>
          </div>
          <div className="audienceCard group">
            <div className="p-6 hover:bg-[#ebebeb]/80 hover:dark:bg-[#1d1d20]/40 border border-gray-800/5 backdrop-blur-lg flex flex-col items-center max-w-xs">
              <div className="card-title font-semibold mb-3 tracking-widest text-lg">
                Startups
              </div>
              <div className="card-content text-center mb-6">
                Web3 native teams, and 'Web2' businesses gazing towards
                innovation.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing */}
      <section id="pricing" className="px-5 py-12">
        <h2 className="text-3xl font-bold flex justify-center items-center mb-12">
          Pricing
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Following the ethos of cryptocurrency, you can transparently see our
          pricing below and what we offer. Payments accepted will be done in
          crypto <span className="underline">only</span> .
        </p>
        <div className="pricingInfo flex flex-wrap justify-center items-center w-full gap-x-12 gap-y-4">
          <div className="cards gap-x-12 gap-y-4 flex flex-wrap justify-center sm:justify-start">
            <div className="w-72 h-[500px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h3 className="text-sm tracking-widest title-font mb-1 font-medium">
                VACANCY POSTS
              </h3>
              <h4 className="flex text-5xl text-gray-900 dark:text-gray-200 pb-4 mb-4 border-b border-gray-200 leading-none">
                250
                <span>
                  <svg
                    data-name="86977684-12db-4850-8f30-233a7c267d11"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 2000 2000"
                  >
                    <path
                      d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"
                      fill="#2775ca"
                    />
                    <path
                      d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"
                      fill="#fff"
                    />
                    <path
                      d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </h4>
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
                Posts will be live for 30 days
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
                Access a global pool of roleseekers
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
                Get featured in our newsletter
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
                Marketed across our social profiles
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
                Distributed via Google Jobs recruitment network ASAP
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
                No account required
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
                Support a Web3 initiative :)
              </p>

              <button className="flex items-center mt-auto text-white bg-[#ed194a]/40 border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#ed194a] rounded">
                Coming Soon
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
          <div className="max-w-xs flex flex-col items-center">
            <img
              src={bankLocker}
              alt="prop"
              className="h-40 sm:h-72 w-40 sm:w-72"
            />
            <p className="text-center tracking-wider">
              Whether you are a Web3 startup, or a "Web2" company in the process
              of migration, tap in to the vast landscape of Web3 and let us help
              you source your next batch of talented Web3 sorcerers 🔮
            </p>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section id="faq" className="py-12 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold flex justify-center items-center mb-12">
          FAQs
        </h2>
        <p className="text-gray-600 flex justify-center text-center">
          Gathered from questions asked across platforms like Twitter and
          Discord
        </p>
        <div className="surveyResults divide-y-[1px] divide-slate-800">
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                What are roleseekers and bountyseekers?
              </h3>
              <p className="leading-relaxed">
                They're terms which we have dediced to go by, to differentiate
                two types of employment an individual seeks for. A roleseeker
                (alternative to jobseeker), is someone who tends to stick around
                longer when looking for a role. A bountyseeker is someone who
                operates as a freelancer, and this covers freelance, internship,
                and apprenticeship gigs - it was inpired from the term 'bounty
                hunters' and adopted to a term that we saw fit to match with
                work.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                What is Web3?
              </h3>
              <p className="leading-relaxed">
                Our reponse to this is that, Web3 is the term that describes the
                digital industrial revolution that we are moving into. The DOT
                com era we've experienced, such as Google, Youtube, and Spotify,
                is considered to be 'Web2' - Web3 encompasses themes like
                Blockchain, Decentralised Finance, DAOs, Metaverse, and Extended
                Reality, just to name a few. These are themes that are changing
                how we interact with each other to another level as we write
                this.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                Why should I invest in Web3?
              </h3>
              <p className="leading-relaxed">
                Web3 provides a lot of investment initiatives and angles, that
                allow you, or anyone else, to earn some good returns on your
                money, compared to what you get in the current financial
                structure - investment opportunities that we will highly likely
                never see in our lifetimes. The main incentive of investing in
                Web3, is the opportunity to invest in this new phase of
                technology at its infancy, putting you in the best financial
                position before the point of mass global adoption. The banks and
                the big guys are even working towards introducing their own
                crypto, CBDCs, as a replacement of current cash, which should
                hint to you what is to come - why not invest in things now, that
                future you WILL HAVE to use anyways, anon?
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                What can I do with Web3?
              </h3>
              <p className="leading-relaxed">
                This is just one example out of many - you can become your own
                bank and do everything that the banks do, by using DeFi
                platforms that allow the borrowing and lending of crypto assets.
                Say you have 1K in USDC, you can lend that thousand through the
                platform and earn interest upon it, then borrow against that
                (sometimes even up to 75%!). At this point you've got many
                options; you could either relend the borrowed amount to gain
                even more interest, invest it in a passive income generator, or
                even invest it in a riskier asset that YOU feel convicted about
                and will yield high returns. You would of course have to repay
                the borrowed amount plus its accrued interest, which can average
                at 3-10% YEARLY. Forgot to mention, for some of these crypto
                assets, you can even get paid through positive interest for
                borrowing them ;)
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                How do I get into Web3?
              </h3>
              <p className="leading-relaxed">
                By learning and participating! Ask questions, connect with
                others and create your own applications. If you don't have a
                role in mind, we'd recommend you to research the various roles
                within the industry that interest you. Hone in your interests,
                think about what you want to do, and execute.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                Do I need to learn programming to get into Web3 and/or tech?
              </h3>
              <p className="leading-relaxed">
                Nope! This new phase of tech is where creativity is fully
                embraced, meaning, that there is room for you to use your skills
                and find your niche. Learning how the tech works will for sure
                give you an advantage though.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                I’m new to programming, what should I learn first?
              </h3>
              <p className="leading-relaxed">
                If you are looking to work more on UIs (user interfaces), we
                would recommend learning the basics (HTML, CSS, JS), which would
                provide you with the fundamentals to create applications. Else,
                you could start by learning Solidity - there are many resources
                online like SolidityByExample and Smart Contract Programmer.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                What technologies should I learn?
              </h3>
              <p className="leading-relaxed">
                We'd suggest learning Solidity first as it is more
                beginner-friendly if you are new, or come from a Javascript-ish
                background - the legend{" "}
                <a href="https://www.twitter.com/dabit3" target={"_blank"}>
                  Nader Dabit
                </a>{" "}
                has a series of fullstack courses which include industry
                standard tooling used alongside Solidity. Another popular and
                in-great-demand tool is Rust!
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                Where can I find web3 internships and remote work in general?
              </h3>
              <p className="leading-relaxed">
                You have come to the right place! Crypo Sourcerers aims to be
                such a platform that allows you, the roleseeker, to find roles
                across the GLOBE.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                What is the salary of a Web3 developer?
              </h3>
              <p className="leading-relaxed">
                The range we have seen for a Web3 developer's salary is around
                60K USD at minimum to +100K USD max. Heck, if you've got some
                good transferrable experience, you could even be reaching the
                200K and 300K USD realms.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                Those salaries???
              </h3>
              <p className="leading-relaxed">
                Yep xD it signals the great demand for individuals with the
                knowledge and/or passion to learn Web3 roles. You can for sure
                earn that much if you can demonstrate how you can mesh your
                current skills with Web3 and provide value to the ecosystem ;)
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                Why can I only pay in crypto? 🐟!
              </h3>
              <p className="leading-relaxed">
                Althought cryptocurrency does indeed have a negative cloud
                around it as of now, we have taken the decision to be the{" "}
                <b className="text-[#ed194a]">first</b> Web3 job board that
                fully embraces crypto payments only, per our knowledge. We
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                Any plans?
              </h3>
              <p className="leading-relaxed">
                Boy there sure are a lot. As stated previously, we want to help
                promote growth within the Web3 space, and the ways we can think
                of right now is by: contributing towards hackathons, connecting
                with individuals and teams to create workshops that teach the
                public more about crypto & Outsiders (non Web3 developers) the
                roles to transfer their skills, and granting initiatives that
                promote more growth in the space; a chemical chain reaction but
                in Web3 haha- think of it like a never-ending relay at the
                Olympics.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap justify-center text-center md:flex-nowrap">
            <div className="md:flex-grow">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-100 title-font mb-2">
                I'm a recruiter/founder, why should I use Web3Source?
              </h3>
              <p className="leading-relaxed">
                We want to assist the Web3 transitioning period and beyond by
                connecting with roleseekers, blockchain ecosystems, and
                businesses (Web2 and Web3) worldwide. Web3Source aims to become
                the world's #1 marketplace for blockchain talent - by using this
                gateway, you can easily scale and build your regional branches
                when you wish to do so :P
              </p>
            </div>
          </div>
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
