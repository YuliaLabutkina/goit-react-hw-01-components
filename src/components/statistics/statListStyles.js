import styled from 'styled-components';

const StatisticalList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
`;

const Item = styled.li`
  padding: 10px;
  box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
`;

const ItemLabel = styled.span`
  display: block;
  text-align: center;
  color: white;
  margin-bottom: 8px;
`;

const ItemPercentage = styled.span`
  display: block;
  font-size: 20px;
  text-align: center;
  color: white;
`;

export { StatisticalList, Item, ItemLabel, ItemPercentage };