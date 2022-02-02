import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardGrid = () => {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=26&tsym=USD&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await res.json();

      // Only use coins that have DISPLAY object (which holds USD price)
      setCoinList(json.Data.filter((coin) => coin.DISPLAY || false));
    };

    fetchCoins();
  }, []);

  console.log(coinList);

  return (
    <Wrap>
      {coinList.map((coin) => (
        <Card key={coin.CoinInfo.Id} coin={coin} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 4rem;
`;

export default CardGrid;
