const StartupCard = () => {
  let emps = 339;
  return (
    <div className="startup p-3 border-[1px] border-gray-300 dark:border-gray-800/30">
      <div className="mb-3 flex justify-between">
        <img src="" alt="" className="rounded-full w-10 h-10" />
        <div className="socials flex space-x-3 items-center">
          <a
            className="ml-0 text-gray-700"
            href="https://www.twitter.com/0xreeko"
            target={"_blank"}
          >
            <svg
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 fill-gray-700 transition hover:fill-[#1DA1F2]"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://enrictrillo.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-gray-700 transition hover:fill-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="font-bold text-md">Avalanche</h1>
        <div className="">
          <span className="p-1 px-3 rounded-full bg-gray-800 dark:bg-[#f5f3fb] text-sm text-white dark:text-black">
            {emps >= 251
              ? "+ 250 employees"
              : emps <= 250 && emps >= 51
              ? "51 - 250 employees"
              : emps <= 50 && emps >= 11
              ? "11 - 50 employees"
              : emps < 10
              ? "1 - 10 employees"
              : null}
          </span>
        </div>
        <p className="text-sm">
          Avalache is an EVM ecosystem that takes advantage of zkRollups to do
          ... better.
        </p>
      </div>
    </div>
  );
};
export default StartupCard;
