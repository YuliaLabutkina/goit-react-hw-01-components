import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransactionHistoryItems from './transactionHistoryItems';


const Table = styled.table`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
  transition: transform 400ms linear, box-shadow 200ms linear;

  &:hover {
  transform: scale(1.03);
  box-shadow: 0 14px 28px rgba(0,0,0,0.35), 0 10px 10px rgba(0,0,0,0.32);
  }
`;

const TableHead = styled.thead`
  font-size: 22px;
  background-color: #00BFFF;
`;

const TableHeadItem = styled.th`
  padding-top: 20px;
  padding-bottom: 20px;
`;

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
            <TransactionHistoryItems items={items}></TransactionHistoryItems >
        </Table>
    );
};

TransactionHistory.propTypes = {
  statistical: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TransactionHistory;