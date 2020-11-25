import Profile from '../profile';
import Statistics from '../statistics';
import FriendList from '../friendList';
import TransactionHistory from '../transactionHistory';

import user from '../../data/user.json';
import statistical from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
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