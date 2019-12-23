import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url, initialState) {
  const [appData, setAppData] = useState(initialState);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setAppData(result.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return {appData, error, isLoading};
}
