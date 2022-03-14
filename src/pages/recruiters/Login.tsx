import { Magic } from "magic-sdk";
import { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
const domains = require("../../domains.json");

const Login = () => {
  let key = "";
  key += process.env.REACT_APP_MAGIC_KEY;

  const [email, setEmail] = useState("");
  let [condition, setCondition] = useState<boolean>();

  let warning = "focus:ring-2 focus:ring-[#ed194a]";

  const m = new Magic(key);

  let handleLogin = async () => {
    try {
      if (email && condition === false) {
        let _e = email.split("@");
        let _d = _e[1];
        fetch(`https://${_d}`, {
          mode: "no-cors",
        })
          .then((res) => res.status === 200)
          .then(() => console.log("passed!"))
          .catch((e) => console.log(`${e}`));
        try {
          await m.auth.loginWithMagicLink({ email: email, showUI: true });
          console.log("loggedIN");
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log("email, conditions or project-domain mismatch!");
      console.log(e);
    }
  };

  let checkCompany = (param: string) => {
    let _e = param.split("@");
    let _d = _e[1];
    if ((!domains.includes(_d) && _d.includes(".")) || !_d) {
      setEmail(param);
      setCondition(false);
      return "yay a company email!";
    } else {
      setCondition(true);
      return "no general email";
    }
  };
  return (
    <div className="my-[25%]">
      <div className="login p-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-md flex flex-col max-w-md mx-auto my-auto py-auto">
        <div className="abc"></div>
        <h1 className="text-lg font-bold">Sign In With Business Email</h1>
        <div className="relative flex items-center mb-3">
          <UserIcon className="w-6 h-6 absolute ml-3 text-slate-400 pointer-events-none" />
          <input
            type="text"
            name=""
            className={`pl-10 py-1 px-3 leading-8 w-full outline-none rounded-md text-black text-base border border-black ${
              (email && email.length < 7 && !email.includes("@")) ||
              !email.includes(".")
                ? warning
                : "ring-green-600"
            }`}
            onChange={(e) => checkCompany(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="disabled:from-slate-500 disabled:to-slate-800 bg-gradient-to-tr from-amber-500 to-rose-500 p-2 px-6 rounded-md font-bold text-white"
          disabled={
            email.length > 7 &&
            email.includes("@") &&
            email.includes(".") &&
            condition === false
              ? false
              : true
          }
        >
          Sign In
        </button>
        <span className="text-[#ed194a] mt-4">
          {condition ? "*no general domains, business only please :)" : null}
        </span>
      </div>
    </div>
  );
};
export default Login;
