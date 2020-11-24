import styled from 'styled-components';
import PropTypes from 'prop-types';

const DescriptionWrap = styled.div`
  margin: 20px auto;
`;

const Img = styled.img`
  width: 150px;
  margin: 0 auto 16px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
`;

const Tag = styled.p`
  text-align: center;
  color: gray;
  margin-bottom: 8px;
`;

const Location = styled.p`
  text-align: center;
  color: gray;
`;

const Description = ({ name, tag, location, avatar }) => {
    return (
      <DescriptionWrap>
        <Img
          src={avatar}
          alt="Аватар пользователя"
        />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionWrap>
    )
};

Description.defaultProps = ({
    name: "unknown",
    tag: "unknown",
});

Description.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
};

export default Description;