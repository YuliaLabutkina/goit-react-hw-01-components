import styled from 'styled-components';

const TableRow = styled.tr`
  &:nth-child(even) {
      background-color: #DCDCDC;
  }
`;

const TableCell = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export { TableRow, TableCell };