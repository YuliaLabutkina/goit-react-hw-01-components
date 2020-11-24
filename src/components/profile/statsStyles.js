import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: #F0FFF0;
  box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
`;

const ItemLabel = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 8px;
`;

const ItemQuantity = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
`;

export { List, ListItem, ItemLabel, ItemQuantity };