import React, { useEffect, useState } from "react";
import apiKey from "../../apiKey";
import { population, prefectures } from "../../data";
import CheckCard from "../molecules/CheckCard";
import CheckField from "../organisms/CheckField";
import Graph from "../organisms/Graph";

const Main: React.FC = () => {
  const labels = ["埼玉県", "千葉県"];

  const [count, setCount] = useState(0);
  const [value, setValue] = useState("initial");

  let typeA: string[];

  typeA = [];

  const [prefNames, setPrefNames] = useState(typeA);

  console.log(population, prefectures);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    console.log(prefName, prefCode, check);

    let c_prefNames = prefNames;

    if (check) {
      c_prefNames.push(prefName);
    } else {
      var idx = c_prefNames.indexOf(prefName);
      if (idx >= 0) {
        c_prefNames.splice(idx, 1);
      }
    }
    setPrefNames(c_prefNames);

    console.log(prefNames);
  };

  return (
    <>
      <CheckField prefectures={prefectures} onChange={handleClickCheck} />
      <Graph population={population} labels={labels} />
    </>
  );
};

export default Main;
