import styled from 'styled-components';
import PropTypes from 'prop-types';
import StatList from './statList';


const SectionWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
  transition: transform 400ms linear, box-shadow 200ms linear;

  &:hover {
  transform: scale(1.03);
  box-shadow: 0 14px 28px rgba(0,0,0,0.35), 0 10px 10px rgba(0,0,0,0.32) ;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Statistics = ({ title, statistical }) => {
    return (
        <SectionWrapper>
            {title && <SectionTitle>{ title }</SectionTitle>}
            <StatList statistical={statistical}></StatList>
        </SectionWrapper>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistical: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Statistics;