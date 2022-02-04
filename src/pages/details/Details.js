import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useFetch } from '../../hooks/useFetch';

import Container from '../../components/Container';

const Details = () => {
  const { symbol } = useParams();
  const { coinData, isLoading, isError } = useFetch(
    `/pricemultifull?fsyms=${symbol}&tsyms=USD`
  );

  if (isLoading) {
    return (
      <>
        <Container>Loading...</Container>
      </>
    );
  }

  const {
    IMAGEURL,
    PRICE,
    MKTCAP,
    CHANGE24HOUR,
    CHANGEPCT24HOUR,
    CIRCULATINGSUPPLY,
  } = coinData.DISPLAY[symbol.toUpperCase()].USD;

  console.log(coinData);

  return (
    <Wrap>
      <Container>
        <BackLink to="/">&larr; Go back</BackLink>
        <Grid>
          <CoinInfo>
            <img
              src={`https://www.cryptocompare.com${IMAGEURL}`}
              alt={symbol}
            />
            <FlexWrap>
              <h2>{symbol}</h2>
              <InfoItem>
                <h3>Price:</h3> <span>{PRICE}</span>
              </InfoItem>
              <InfoItem>
                <h3>Market Cap:</h3> <span>{MKTCAP}</span>
              </InfoItem>
              <InfoItem>
                <h3>Circulating Supply:</h3> <span>{CIRCULATINGSUPPLY}</span>
              </InfoItem>
              <InfoItem>
                <h3>
                  Change <span className="small-text">$ (24hr)</span>:
                </h3>{' '}
                <span className={CHANGEPCT24HOUR >= 0 ? 'green' : 'red'}>
                  {CHANGE24HOUR}
                </span>
              </InfoItem>
              <InfoItem>
                <h3>
                  Change <span className="small-text">% (24hr)</span>:
                </h3>{' '}
                <span className={CHANGEPCT24HOUR >= 0 ? 'green' : 'red'}>
                  {CHANGEPCT24HOUR}%
                </span>
              </InfoItem>
            </FlexWrap>
          </CoinInfo>
          <CoinNews>News for: {symbol}</CoinNews>
        </Grid>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div``;

const BackLink = styled(Link)`
  display: inline-block;
  margin: 5rem 0 12.5rem 0;
  padding: 1rem 2rem;
  font-weight: 600;
  border: 2px solid var(--input-outline-color);
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-white);

  &:hover {
    background: var(--input-outline-color);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 5rem;
`;

const CoinInfo = styled.div`
  position: relative;
  background: var(--card-bg-color);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 7.5rem 3rem 5rem 3rem;

  img {
    position: absolute;
    top: -5rem;
    left: 5rem;
    height: 10rem;
  }

  h2 {
    font-size: 3.2rem;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-color-2);
  }

  span {
    font-weight: 600;

    &.small-text {
      font-size: 1.6rem;
    }

    &.green {
      color: #58c258;
    }

    &.red {
      color: #f53434;
    }
  }
`;

const CoinNews = styled.div`
  background: var(--card-bg-color);
`;

export default Details;
