import styled from 'styled-components';

const FilterBar = () => {
  return (
    <Wrap>
      <div>
        X
        <input type="text" placeholder="Search for a country..." />
      </div>
      <select>
        <option value="region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Asia">Europe</option>
        <option value="Asia">Oceana</option>
      </select>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default FilterBar;
