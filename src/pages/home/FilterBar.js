import { useState } from 'react';
import styled from 'styled-components';

const FilterBar = () => {
  const [search, setSearch] = useState('');

  return (
    <Wrap>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a coin..."
        />
      </div>
      <select>
        <option value="market-cap">Market Cap</option>
        <option value="price">Price</option>
        <option value="pct-24-hr">Percent (24 hr)</option>
      </select>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 20rem;
    color: var(--text-color-2);
    font-weight: 600;
    padding: 1.5rem;
    border-radius: 4px;
    background: transparent;
    outline: none;
    border: 2px solid var(--input-outline-color);

    &:focus,
    &:active {
      border: 2px solid #696c79;
    }

    &::placeholder {
      color: var(--text-color-2);
    }
  }
`;

export default FilterBar;
