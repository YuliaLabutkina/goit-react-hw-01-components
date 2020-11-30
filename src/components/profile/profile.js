import PropTypes from 'prop-types';
import Description from './Description';
import Stats from './Stats';
import Container from './ProfileStyles';

const Profile = ({ user }) => {
  const { stats, ...descriptionProps } = user;
  return (
    user && (
      <Container>
        <Description {...descriptionProps}/>
        <Stats {...stats}/>
      </Container>
    )
  )
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;