import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';

import Card from './Card';

const CardGrid = () => {
  const { coinData, isLoading, isError } = useFetch(
    '/top/mktcapfull?limit=51&tsym=USD'
  );
  const [validCoinData, setValidCoinData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      // Only use coins that have DISPLAY object (which holds USD price)
      setValidCoinData(coinData.Data.filter((coin) => coin.DISPLAY || false));
    }
  }, [isLoading]);

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
        validCoinData.map((coin) => (
          <Card key={coin.CoinInfo.Id} coin={coin} />
        ))}
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
