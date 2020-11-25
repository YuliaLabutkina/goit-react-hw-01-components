import Profile from '../profile'
import user from '../../data/user.json';
import Statistics from '../statistics';
import statistical from '../../data/statistical-data.json';
import FriendList from '../friendList';
import friends from '../../data/friends.json';
import TransactionHistory from '../transactionHistory';
import items from '../../data/transactions.json';
import AppWrapper from './appStyles';


const App = () => {
    return (
          <AppWrapper>
            <Profile user={user}/>
            <Statistics title={"Upload stats"} statistical={statistical}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={items}/>
          </AppWrapper>
    )
};

export default App;