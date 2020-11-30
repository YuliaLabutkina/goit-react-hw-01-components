import PropTypes from 'prop-types';
import TransactionHistoryItems from './TransactionHistoryItems';
import { Table, TableHead, TableHeadItem } from './TransactionHistoryStyle';

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