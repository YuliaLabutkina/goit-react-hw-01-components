import PropTypes from 'prop-types';
import { List, ListItem, ItemLabel, ItemQuantity } from './StatsStyles';

const Stats = ({ followers, views, likes }) => {
  return (
    <List>
      <ListItem>
        <ItemLabel>Followers</ItemLabel>
        <ItemQuantity>{followers}</ItemQuantity>
      </ListItem>
      <ListItem>
        <ItemLabel>Views</ItemLabel>
        <ItemQuantity>{views}</ItemQuantity>
      </ListItem>
      <ListItem>
        <ItemLabel>Likes</ItemLabel>
        <ItemQuantity>{likes}</ItemQuantity>
      </ListItem>
    </List>
  )
};

Stats.defaultProps = ({
    followers: 0,
    views: 0,
    likes: 0,
});

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Stats;