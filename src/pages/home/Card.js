import styled from 'styled-components';

const Card = ({ coin }) => {
  const change = coin.DISPLAY.USD.CHANGEPCT24HOUR;

  return (
    <Wrap>
      <span className="ticker">{coin.CoinInfo.Name}</span>
      <h2 className="name">{coin.CoinInfo.FullName}</h2>
      <span className="price">{coin.DISPLAY.USD.PRICE}</span>
      <PriceChange change={change}>{change}%</PriceChange>
      <img
        src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
        alt={coin.CoinInfo.FullName}
      />
      <h3>Market Cap:</h3>
      <p>{coin.DISPLAY.USD.MKTCAP}</p>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background: #2e3039;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(75, 75, 75, 0.1);

  span {
    display: block;
  }

  .ticker {
    color: #a9adc1;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .name {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
    color: #a9adc1;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  img {
    height: 12.5rem;
    padding: 2rem;
  }
`;

const PriceChange = styled.span`
  color: ${({ change }) => (Number(change) >= 0 ? '#58c258' : '#f53434')};
`;

export default Card;
