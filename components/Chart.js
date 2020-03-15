import useChart from "./UseChart";
import { Line } from "react-chartjs-2";

const Chart = ({ url }) => {
  const { stats, loading, error } = useChart(url);
  if (loading) return <p>Calculating data...</p>;
  if (error) return <p>Error...</p>;
  const chartDates = [];
  const chartConfirmed = [];
  const chartTotalRecovered = [];
  const chartChina = [];
  const chartOtherLocations = [];
  if (Boolean(stats)) {
    stats.forEach(x => {
      chartDates.push(x["reportDateString"]);
      chartConfirmed.push(x["totalConfirmed"]);
      chartTotalRecovered.push(x["totalRecovered"]);
      chartOtherLocations.push(x["otherLocations"]);
      chartChina.push(x["mainlandChina"]);
    });
  }

  const data = {
    labels: chartDates,
    datasets: [
      {
        label: "Total Confirmed",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "white",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartConfirmed
      },
      {
        label: "China Confirmed",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "yellow",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartChina
      },
      {
        label: "Other Locations Confirmed",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "blue",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartOtherLocations
      },
      {
        label: "Total Recovered",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "green",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartTotalRecovered
      }
    ]
  };
  //   if (loading) return <p>Calculating data...</p>;
  //   if (error) return <p>Error...</p>;
  return (
    <div>
      <hr />
      <h2 className="title">
        <span role="img" aria-label="world">
          🌎
        </span>{" "}
        World Stats{" "}
        <span role="img" aria-label="world">
          🌎
        </span>
      </h2>
      <Line data={data} />
    </div>
  );
};

export default Chart;
