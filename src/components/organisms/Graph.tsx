import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// The wrapper exports only a default component class that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props). All other
// interfaces like Options come from the Highcharts module itself.

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "10px",
  },
};

type Props = {
  population: {
    message: null;
    result: {
      boundaryYear: number;
      data: (
        | {
            label: string;
            data: {
              year: number;
              value: number;
            }[];
          }
        | {
            label: string;
            data: {
              year: number;
              value: number;
              rate: number;
            }[];
          }
      )[];
    };
  }[];
  labels: string[];
};

const options: Highcharts.Options = {
  title: {
    text: "総人口推移",
  },
  xAxis: {
    title: {
      text: "年度",
    },
  },
  yAxis: {
    title: {
      text: "人口数",
    },
  },
};

const Graph: React.FC<Props> = ({ population, labels }) => {
  let i = 0;

  let series: any;

  let s = [];

  for (let p of population) {
    let data = [];
    let categories = [];

    for (let num_population of p.result.data[0].data) {
      data.push(num_population.value);
      categories.push(String(num_population.year));
    }

    s.push({
      type: "line",
      name: labels[i],
      data: data,
    });

    options["xAxis"] = {
      categories: categories,
    };
    i++;
  }

  series = s;

  options["series"] = series;

  return (
    <div style={Styles.graph}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Graph;
