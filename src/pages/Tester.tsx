import Moralis from "moralis";
import { useEffect, useState } from "react";
const Types = require("../types.json");
const Ecosystems = require("../ecosystems.json");

const Tester = () => {
  const Vacancy = Moralis.Object.extend("Vacancy");
  const query = new Moralis.Query(Vacancy);

  const [results, setResults] = useState<typeof Vacancy>([]);

  // filters
  const [title, setTitle] = useState("");
  const [remote, setRemote] = useState("");
  const [benefits, setBenefit] = useState("");
  const [type, setType] = useState([...Types]);
  const [ecosystem, setEcosystem] = useState([...Ecosystems]);

  // view
  // const [viewStyle, setViewStyle] = useState("list");

  const getData = async () => {
    const data = await query.find();
    setResults(data);
  };

  // const changeTypeChecked = (id: number) => {
  //   const data = type;
  //   const changedData = data.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setType(changedData);
  // };
  // const changeEcoChecked = (id: number) => {
  //   const data = ecosystem;
  //   const changedData = data.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setEcosystem(changedData);
  // };

  const reset = () => {
    setTitle("");
    setRemote("");
    setBenefit("");
    setType([...Types]);
    setEcosystem([...Ecosystems]);
    getData();
    console.log("the global reset");
  };

  const applyFilters = () => {
    let updatedBase = results;

    if (title !== "") {
      updatedBase = updatedBase.filter((item: any) =>
        item.attributes.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (remote !== "") {
      updatedBase = updatedBase.filter((item: any) =>
        item.attributes.remote.toString().match(remote.toString())
      );
    }
    if (benefits !== "") {
      updatedBase = updatedBase.filter((item: any) =>
        item.attributes.benefits[0].toString().match(benefits.toString())
      );
    }
    const typeChecked = type
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (typeChecked && type) {
      updatedBase = updatedBase.filter((item: any) =>
        typeChecked.includes(item.attributes.type)
      );
    }
    const ecoChecked = ecosystem
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (ecoChecked && ecosystem) {
      updatedBase = updatedBase.filter((item: any) =>
        ecoChecked.some(item.attributes.ecosystem)
      );
    }
    setResults(updatedBase);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [title, remote, benefits, type, ecosystem]);

  return (
    <div className="text-white">
      <h1>
        Show me results{" "}
        <span onClick={() => reset()} className="text-[#ed194a]">
          RESET
        </span>
      </h1>
      No. results: {results ? results.length : 0} results
    </div>
  );
};
export default Tester;
