import { Magic } from "magic-sdk";
import { useState } from "react";
const domains = require("../../domains.json");

const Login = () => {
  let key = "";
  key += process.env.REACT_APP_MAGIC_KEY;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  let [condition, setCondition] = useState<boolean>();

  let warning = "focus:ring-2 focus:ring-red-500";

  // const m = new Magic(key);

  let handleLogin = async () => {
    try {
      if (email && condition === false && !email.includes(name)) {
        let _e = email.split("@");
        let _d = _e[1];
        fetch(`https://${_d}`, {
          mode: "no-cors",
        })
          .then((res) => res.status === 200)
          .then(() => console.log("passed!"))
          .catch((e) => console.log(`${e}`));
        try {
          // await m.auth.loginWithMagicLink({ email: email, showUI: true });
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
    if (!domains.includes(_d) && _d.includes(".")) {
      setEmail(param);
      setCondition(false);
      return "yay a company email!";
    } else {
      setCondition(true);
      return "no general email";
    }
  };
  return (
    <div className="login">
      {/* <p>Email: {email}</p> */}
      {/* <p>Condition: {condition ? "not good to go" : "good to go"}</p> */}
      <div className="networkSelect">
        <input
          type="text"
          name=""
          className="p-1 pl-3 mb-3 outline-none rounded-md border border-black"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name=""
          className={`p-1 pl-3 mb-3 outline-none rounded-md border border-black ${
            (email && email.length < 7 && !email.includes("@")) ||
            !email.includes(".")
              ? warning
              : "ring-green-600"
          }`}
          onChange={(e) => checkCompany(e.target.value)}
        />
      </div>
      <p>
        {email.match(`${name.toLowerCase()}`) ? "contains" : "does not contain"}
      </p>
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
    </div>
  );
};
export default Login;
