import React, { useEffect, useState } from "react";
import apiKey from "../../apiKey";
import Graph from "../organisms/Graph";

const Main: React.FC = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("initial");

  useEffect(() => {
    // この副作用は変数valueを使う
    // そのためvalueに依存している
    console.log(value);
  }, [value]); // 依存関係としてvalueを渡す

  return (
    <>
      <div>{apiKey}</div>
      <div>
        <Graph />
      </div>
    </>
  );
};

export default Main;
