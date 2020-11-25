import PropTypes from 'prop-types';
import Description from './description';
import Stats from './stats';
import Container from './profileStyles';

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