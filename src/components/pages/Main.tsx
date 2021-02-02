import React, { useEffect, useState } from "react";
import apiKey from "../../apiKey";
import CheckField from "../organisms/CheckField";
import Graph from "../organisms/Graph";

import axios from "axios";

const Main: React.FC = () => {
  const [value] = useState("initial");
  const [prefectures, setPreFectures] = useState(null);
  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([]);

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
    let c_prefPopulation = prefPopulation.slice();

    if (check) {
      if (
        c_prefPopulation.findIndex((value) => value.prefName === prefName) !==
        -1
      )
        return;

      axios
        .get(
          "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
            String(prefCode),
          {
            headers: { "X-API-KEY": apiKey },
          }
        )
        .then((results) => {
          console.log(results.data);

          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0].data,
          });

          setPrefPopulation(c_prefPopulation);
        })
        .catch((error) => {
          console.log("通信失敗");
          console.log(error.status);
          return;
        });
    } else {
      const deleteIndex = c_prefPopulation.findIndex(
        (value) => value.prefName === prefName
      );
      if (deleteIndex === -1) return;
      c_prefPopulation.splice(deleteIndex, 1);
      setPrefPopulation(c_prefPopulation);
    }
  };

  return (
    <>
      <CheckField prefectures={prefectures} onChange={handleClickCheck} />
      <Graph populationdata={prefPopulation} />
    </>
  );
};

export default Main;
