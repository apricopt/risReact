import React, { useState, useEffect } from 'react'






function useDataFetching(dataSource) {

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const json = await data.json();


        if (json) {
          setLoading(false);
          setResults(json);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();

    // axios.get(dataSource).then((response) => {
    //   setResults(response.data);
    //   setLoading(false);

    // }).catch(err => console.log(err));
  }, [dataSource]);




  // The initial values for the return values are set when calling the useState Hook, and can be updated using the second value of array that's being returned by the Hook. The first value is the current state value and should therefore be returned at the end of the custom Hook.
  return {
    loading,
    results,
    error

  };


}

export default useDataFetching;