import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);

    try {
      const response = await fetch(url, { ...options });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();

      setPending(false);

      setData(result);

      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error}. Some error occurred`);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
