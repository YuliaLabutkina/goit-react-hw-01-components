import styled from 'styled-components';
import PropTypes from 'prop-types';


const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: #F0FFF0;
  box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
`;

const ItemLabel = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 8px;
`;

const ItemQuantity = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
`;

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