import React, { useEffect, useState } from "react";
import apiKey from "../../apiKey";
import { population, prefectures } from "../../data";
import CheckCard from "../molecules/CheckCard";
import CheckField from "../organisms/CheckField";
import Graph from "../organisms/Graph";

const Main: React.FC = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("initial");

  console.log(population, prefectures);

  useEffect(() => {
    // この副作用は変数valueを使う
    // そのためvalueに依存している
    console.log(value);
  }, [value]); // 依存関係としてvalueを渡す

  return (
    <>
      <CheckField prefectures={prefectures} />
    </>
  );
};

export default Main;
