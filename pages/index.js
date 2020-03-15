import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import { createGlobalStyle } from "styled-components";
import Chart from "../components/Chart";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1f1e1e;
    color: white;
    margin: 0 8rem;
    
  }
  h1, h3 {
      margin: 0;
  }
  .title {
      text-align: center;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      {/* <hr /> */}
      <h2 className="title">World Stats</h2>
      <Stats url="https://covid19.mathdro.id/api" />
      <hr />
      <CountrySelector />
      <hr />
      <Chart url="https://covid19.mathdro.id/api/daily" />
    </div>
  );
}
