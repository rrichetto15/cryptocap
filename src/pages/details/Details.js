import { Link, useParams } from 'react-router-dom';
import { ImSpinner10 } from 'react-icons/im';
import styled from 'styled-components';

import { useFetch } from '../../hooks/useFetch';

import Container from '../../components/Container';
import Article from './Article';

const Details = () => {
  const { symbol } = useParams();
  const { coinData, isLoading, isError } = useFetch(
    `/pricemultifull?fsyms=${symbol}&tsyms=USD`
  );
  const {
    coinData: newsArticles,
    isLoading: isNewsLoading,
    isError: isNewsError,
  } = useFetch(`/v2/news/?categories=${symbol}`);

  if (isLoading || isNewsLoading) {
    return (
      <>
        <Container>
          <ImSpinner10 className="spinner" />
        </Container>
      </>
    );
  }

  if (isError || isNewsError) {
    return (
      <>
        <Container>
          <h2>Something went wrong, please try again soon.</h2>
        </Container>
      </>
    );
  }

  console.log(newsArticles);

  const {
    IMAGEURL,
    PRICE,
    MKTCAP,
    CHANGE24HOUR,
    CHANGEPCT24HOUR,
    CIRCULATINGSUPPLY,
  } = coinData.DISPLAY[symbol.toUpperCase()].USD;

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
                <h3>Supply:</h3> <span>{CIRCULATINGSUPPLY}</span>
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
          <CoinNews>
            <h2>Latest News for {symbol}</h2>
            {newsArticles.Data.slice(0, 3).map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </CoinNews>
        </Grid>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div``;

const BackLink = styled(Link)`
  display: inline-block;
  margin: 2.5rem 0 10rem 0;
  padding: 1rem 2rem;
  font-weight: 600;
  border: 2px solid var(--input-outline-color);
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-white);

  &:hover {
    color: #fff;
    background: var(--input-outline-color);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 5rem;

  @media screen and (max-width: 1040px) {
    grid-template-columns: 1fr;
    max-width: 55rem;
    margin: 0 auto;
  }
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
    border-radius: 4px;
  }

  h2 {
    font-size: 3.2rem;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 1rem;
  }

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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 3rem 1.5rem;

  h2 {
    margin-bottom: 2.5rem;
    margin-left: 1.5rem;
  }
`;

export default Details;
