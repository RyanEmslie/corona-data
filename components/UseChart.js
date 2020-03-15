import { useState, useEffect } from "react";
// Custom hook useStats
// useEffect runs fetch
// updates local state with json response
// no cleanup function

// returns local state
const useChart = url => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      console.log("Fetching Data");
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));
      console.log(data);
      setStats(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { stats, loading, error };
};

export default useChart;
