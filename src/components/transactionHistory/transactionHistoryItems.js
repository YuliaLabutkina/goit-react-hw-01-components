import PropTypes from 'prop-types';
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

const TransactionHistoryItems = ({ items }) => {
    return (
        <tbody>
            {items.map(item => (
               <TableRow key={item.id}>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.currency}</TableCell>
                </TableRow>
            ))
            }
        </tbody>
    )
};

TransactionHistoryItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
};

export default TransactionHistoryItems;