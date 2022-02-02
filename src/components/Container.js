import styled from 'styled-components';

const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  max-width: 124rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
