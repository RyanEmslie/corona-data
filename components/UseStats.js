import { useState, useEffect } from "react";
// Custom hook useStats
// useEffect runs fetch
// updates local state with json response
// no cleanup function

// returns local state
const useStats = url => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      console.log("Fetching Data - Stats");
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));
      setStats(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { stats, loading, error };
};

export default useStats;
