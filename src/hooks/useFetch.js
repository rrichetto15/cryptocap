import { useState, useEffect } from 'react';
import axios from 'axios';

const API_ENDPOINT = `https://min-api.cryptocompare.com/data`;
const API_KEY = `&api_key=${process.env.REACT_APP_API_KEY}`;

export const useFetch = (params = '') => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await axios.get(url);

        // Only use coins that have DISPLAY object (which holds USD price)
        setCoinData(data.Data.filter((coin) => coin.DISPLAY || false));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    };

    fetchData(`${API_ENDPOINT}${params}${API_KEY}`);
  }, [params]);

  return { coinData, isLoading, isError };
};
