import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import List from './friendListStyles';

const FriendList = ({ friends }) => {
    return (
        friends.length > 0 && (
            <List>
                <FriendListItem friends={friends} />
            </List>
        )
    )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendList;