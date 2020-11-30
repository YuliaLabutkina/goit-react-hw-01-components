import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

import user from '../../data/user.json';
import statistical from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import items from '../../data/transactions.json';

import AppWrapper from './AppStyles';


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