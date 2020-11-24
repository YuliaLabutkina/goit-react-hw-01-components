import PropTypes from 'prop-types';
import StatList from './statList';
import { SectionWrapper, SectionTitle } from './statisticsStyles';

const Statistics = ({ title, statistical }) => {
    return (
        <SectionWrapper>
            {title && <SectionTitle>{ title }</SectionTitle>}
            <StatList statistical={statistical}/>
        </SectionWrapper>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistical: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Statistics;