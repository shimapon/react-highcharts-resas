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

  console.log(population, prefectures);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <CheckField prefectures={prefectures} />
      <Graph population={population} labels={labels} />
    </>
  );
};

export default Main;
