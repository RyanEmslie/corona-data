import useStats from "./UseStats";
import { useState } from "react";
import Stats from "./Stats";

const CountrySelector = () => {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  //   if (!countries) return <p>Calculating data...</p>;
  if (loading) return <p>Calculating data...</p>;
  if (loading) return <p>Calculating data...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <hr />
      <h2 className="title">{selectedCountry} Stats</h2>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
};

export default CountrySelector;
