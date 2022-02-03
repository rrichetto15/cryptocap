import { useParams } from 'react-router-dom';

const Details = () => {
  const { symbol } = useParams();

  return <div>Details for: {symbol}</div>;
};

export default Details;
