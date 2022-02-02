import styled from 'styled-components';

import Container from '../../components/Container';
// import FilterBar from './FilterBar';
import CardGrid from './CardGrid';

const Home = () => {
  return (
    <Wrap>
      <Container>
        <Flex>
          {/* <FilterBar /> */}
          <CardGrid />
        </Flex>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export default Home;
