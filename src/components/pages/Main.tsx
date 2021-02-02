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

    // 都道府県一覧を取得する
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey },
      })
      .then((results) => {
        setPreFectures(results.data);
      })
      .catch((error) => {});
  }, [value]);

  // チェックボックスをクリックした際の処理
  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    let c_prefPopulation = prefPopulation.slice();

    // チェックをつけた処理
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
          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0].data,
          });

          setPrefPopulation(c_prefPopulation);
        })
        .catch((error) => {
          return;
        });
    }
    // チェックを外した処理
    else {
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
