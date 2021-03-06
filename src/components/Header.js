import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

import Container from './Container';

import { BsSun, BsMoonFill } from 'react-icons/bs';

const Header = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <header>
      <Container>
        <Content>
          <Link to="/">
            <h1>CryptoCap</h1>
          </Link>
          <button onClick={switchTheme}>
            {theme === 'light-theme' ? (
              <>
                <BsMoonFill />
                Dark Mode
              </>
            ) : (
              <>
                <BsSun />
                Light Mode
              </>
            )}
          </button>
        </Content>
      </Container>
    </header>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  h1 {
    font-size: 2.4rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-light);

    background: none;
    border: 0;
    cursor: pointer;
  }
`;

export default Header;
