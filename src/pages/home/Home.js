import styled from 'styled-components';

import Container from '../../components/Container';
import CardGrid from './CardGrid';

const Home = () => {
  return (
    <Wrap>
      <Container>
        <Flex>
          <CardGrid />
        </Flex>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 5rem;

  h1 {
    text-align: center;
    font-size: 4.2rem;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export default Home;
