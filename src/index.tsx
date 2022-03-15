import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// import { MoralisProvider } from "react-moralis";
import { Moralis } from "moralis";

const APP_ID = `${process.env.REACT_APP_MORALIS_ID}`;
const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}`;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  let errMsg =
    "Missing Moralis configuration. Ensure your ENV files are setup properly. Contact dev@web3Source.co";

  if (!APP_ID || !SERVER_URL) alert(errMsg);
  if (isServerInfo) {
    Moralis.start({ serverUrl: SERVER_URL, appId: APP_ID });
    console.log("connected::");
    return (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
  } else {
    return (
      <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
        <p>
          Sorry the app seems to be down! We are looking to resolve this as soon
          as possible!
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
