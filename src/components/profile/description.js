import PropTypes from 'prop-types';
import defaultImg from '../../img/not_found.jpg';
import { DescriptionWrap, Img, Name, Tag, Location } from './descriptionStyles';

const Description = ({ name, tag, location, avatar }) => {
    return (
      <DescriptionWrap>
        <Img
          src={avatar}
          alt="Аватар пользователя"
        />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        {location && <Location>{location}</Location>}
      </DescriptionWrap>
    )
};

Description.defaultProps = ({
    name: "unknown",
    tag: "unknown",
    avatar: defaultImg,
});

Description.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
};

export default Description;