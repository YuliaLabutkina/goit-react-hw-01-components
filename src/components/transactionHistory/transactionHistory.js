import PropTypes from 'prop-types';
import TransactionHistoryItems from './transactionHistoryItems';
import { Table, TableHead, TableHeadItem } from './transactionHistoryStyle';

const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <TableHeadItem>Type</TableHeadItem>
                    <TableHeadItem>Amount</TableHeadItem>
                    <TableHeadItem>Currency</TableHeadItem>
                </tr>
            </TableHead>
            <TransactionHistoryItems items={items}/>
        </Table>
    );
};

TransactionHistory.propTypes = {
  statistical: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TransactionHistory;