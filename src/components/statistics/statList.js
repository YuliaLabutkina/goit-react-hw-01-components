import PropTypes from 'prop-types';
import { StatisticalList, Item, ItemLabel, ItemPercentage } from './statListStyles';

const RGB = (max, min) => {
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${r}, ${g}, ${b})`;
};

const StatList = ({ statistical }) => {
  return (
    <StatisticalList>
      {statistical.map(statistic => (
        <Item key={statistic.id} style={{ 'backgroundColor': `${RGB(0, 255)}` }}>
          <ItemLabel>{statistic.label}</ItemLabel>
          <ItemPercentage>{statistic.percentage}%</ItemPercentage>
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