import React, { useEffect, useState } from "react";
import apiKey from "../../apiKey";
import { population } from "../../data";
import CheckField from "../organisms/CheckField";
import Graph from "../organisms/Graph";

import axios from "axios";

const Main: React.FC = () => {
  const labels = ["埼玉県", "千葉県"];

  const [value, setValue] = useState("initial");

  let typeA: string[];
  let typeB: any;

  typeA = [];
  typeB = {};

  const [prefNames, setPrefNames] = useState(typeA);

  const [prefectures, setPreFectures] = useState(null);

  console.log(population);

  useEffect(() => {
    // 一度だけ実行
    console.log(value);

    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey },
      })
      .then((results) => {
        console.log(results.data);
        setPreFectures(results.data);
      })
      .catch((error) => {
        console.log("通信失敗");
        console.log(error.status);
      });
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
