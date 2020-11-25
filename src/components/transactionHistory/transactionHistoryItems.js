import PropTypes from 'prop-types';
import { TableRow, TableCell } from './transactionHistoryItemsStyles';

const TransactionHistoryItems = ({ items }) => {
  if (items.length === 0) return null;
    return (
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
               <TableRow key={id}>
                    <TableCell>{type}</TableCell>
                    <TableCell>{amount}</TableCell>
                    <TableCell>{currency}</TableCell>
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