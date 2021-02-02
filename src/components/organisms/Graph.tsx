import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Text from "../atoms/Text";

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "10px",
  },
  label: {
    fontSize: "20px",
    padding: "0.5rem 2rem",
    borderLeft: "4px solid #000",
    marginLeft: "10pt",
  },
};

type Props = {
  populationdata: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
};

const Graph: React.FC<Props> = ({ populationdata }) => {
  console.log(populationdata);

  let series: Highcharts.SeriesOptionsType[] = [];
  let categories = [];

  for (let p of populationdata) {
    let data = [];

    for (let pd of p.data) {
      data.push(pd.value);
      categories.push(String(pd.year));
    }

    series.push({
      type: "line",
      name: p.prefName,
      data: data,
    });
  }

  const options: Highcharts.Options = {
    title: {
      text: "総人口推移",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
  };

  return (
    <div style={Styles.graph}>
      <Text style={Styles.label} text="人口推移グラフ" />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Graph;
