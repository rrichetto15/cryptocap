import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardGrid = () => {
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await axios.get(
          `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=26&tsym=USD&api_key=${process.env.REACT_APP_API_KEY}`
        );

        // Only use coins that have DISPLAY object (which holds USD price)
        setCoinList(data.Data.filter((coin) => coin.DISPLAY || false));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    };

    fetchCoins();
  }, []);

  console.log(coinList);

  return (
    <Wrap>
      {isLoading && <h2 className="loading">Loading Coins...</h2>}
      {isError && (
        <h2 className="loading">
          Something went wrong, please try again soon.
        </h2>
      )}
      {!isLoading &&
        !isError &&
        coinList.map((coin) => <Card key={coin.CoinInfo.Id} coin={coin} />)}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 4rem;

  .loading {
    text-align: center;
  }
`;

export default CardGrid;
