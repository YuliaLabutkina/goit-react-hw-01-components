import styled from 'styled-components';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';


const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FriendList = ({ friends }) => {
    return (
        <List>
            <FriendListItem friends={friends}></FriendListItem>
        </List>
    )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendList;