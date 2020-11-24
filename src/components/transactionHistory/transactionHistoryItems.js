import PropTypes from 'prop-types';
import { TableRow, TableCell } from './transactionHistoryItemsStyles';

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