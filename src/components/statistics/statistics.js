import PropTypes from 'prop-types';
import StatList from './StatList';
import { SectionWrapper, SectionTitle } from './StatisticsStyles';

const Statistics = ({ title, statistical }) => {
    return (
        <SectionWrapper>
            {title && <SectionTitle>{ title }</SectionTitle>}
            {statistical.length > 0 && <StatList statistical={statistical}/>}
        </SectionWrapper>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistical: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Statistics;