import PropTypes from 'prop-types';
import { Item, IsOnline, Img, Name } from './FriendListItemStyles'

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
      <Item key={id}>
        {<IsOnline isOnline={isOnline} />}
        <Img src={avatar} alt={name} />
        <Name>{name}</Name>
      </Item>
  )
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })),
};

export default FriendListItem;