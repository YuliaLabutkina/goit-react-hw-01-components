import PropTypes from 'prop-types';
import RGB from './randomRGB';
import { StatisticalList, Item, ItemLabel, ItemPercentage } from './StatListStyles';

const StatList = ({ statistical }) => {
  return (
    <StatisticalList>
      {statistical.map(({ id, label, percentage }) => (
        <Item key={id} style={{ 'backgroundColor': `${RGB(0, 255)}` }}>
          <ItemLabel>{label}</ItemLabel>
          <ItemPercentage>{percentage}%</ItemPercentage>
        </Item>
      ))}
    </StatisticalList>
  )
};

StatList.propTypes = {
  statistical: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

export default StatList;