import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Details = () => {
  const { symbol } = useParams();
  const { coinData, isLoading, isError } = useFetch(
    `/pricemultifull?fsyms=${symbol}&tsyms=USD`
  );

  console.log('THE COIN DATA 🔥');
  console.log(coinData);

  return <div>Details for: {symbol}</div>;
};

export default Details;
