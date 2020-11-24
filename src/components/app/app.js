import styled from 'styled-components';
import Profile from '../profile/profile'
import user from '../../data/user.json';
import Statistics from '../statistics/statistics';
import statistical from '../../data/statistical-data.json';
import FriendList from '../friendList/friendList';
import friends from '../../data/friends.json';
import TransactionHistory from '../transactionHistory/transactionHistory';
import items from '../../data/transactions.json';


const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr, 2fr);
  }
`;

const App = () => {
    return (
          <AppWrapper>
            <Profile user={user}></Profile>
            <Statistics title={"Upload stats"} statistical={statistical}></Statistics>
            <FriendList friends={friends}></FriendList>
            <TransactionHistory items={items}></TransactionHistory>
          </AppWrapper>
    )
};

export default App;