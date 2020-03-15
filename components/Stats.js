import styled from "styled-components";
import useStats from "./UseStats";

var moment = require("moment");
var commaNumber = require("comma-number");

const StatGrid = styled.div`
  margin-right: 8rem;
  margin-left: 8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
`;
const StatBlock = styled.div`
  //   background: white;
  font-size: 1rem;
  border-radius: 3rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  if (loading) return <p>Calculating data...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      {Boolean(stats.confirmed) ? (
        <>
          <StatGrid>
            <StatBlock>
              <span style={{ color: "#4294ef" }}>
                <h5>Confirmed:</h5>
                <h1>{commaNumber(stats.confirmed.value)}</h1>
                <h2 style={{ color: "#1f1e1e" }}>N/A</h2>
              </span>
            </StatBlock>
            <StatBlock>
              <span style={{ color: "#df4343" }}>
                <h5>Deaths:</h5>
                <h1>{commaNumber(stats.deaths.value)}</h1>
                <h2>
                  {((stats.deaths.value / stats.confirmed.value) * 100).toFixed(
                    1
                  )}
                  %
                </h2>
              </span>
            </StatBlock>
            <StatBlock>
              <span style={{ color: "green" }}>
                <h5>Recoverd:</h5>
                <h1>{commaNumber(stats.recovered.value)}</h1>
                <h2>
                  {(
                    (stats.recovered.value / stats.confirmed.value) *
                    100
                  ).toFixed(1)}
                  %
                </h2>
              </span>
            </StatBlock>
          </StatGrid>
          <p>
            Last updated:{" "}
            {moment(stats.lastUpdate).format("MMM-DD-YYYY h:mm:ss")}
          </p>
        </>
      ) : (
        <StatGrid>
          <StatBlock>
            <h3>Confirmed:</h3>
            <span>N/A</span>
          </StatBlock>
          <StatBlock>
            <h3>Deaths:</h3>
            <span>N/A</span>
          </StatBlock>
          <StatBlock>
            <h3>Recoverd:</h3>
            <span>N/A</span>
          </StatBlock>
        </StatGrid>
      )}
    </>
  );
};

export default Stats;
