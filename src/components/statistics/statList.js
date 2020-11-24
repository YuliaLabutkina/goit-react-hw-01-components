import styled from 'styled-components';
import PropTypes from 'prop-types';

const RGB = (max, min) => {
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${r}, ${g}, ${b})`;
};

const StatisticalList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
`;

const Item = styled.li`
  padding: 10px;
  box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
`;

const ItemLabel = styled.span`
  display: block;
  text-align: center;
  color: white;
  margin-bottom: 8px;
`;

const ItemPercentage = styled.span`
  display: block;
  font-size: 20px;
  text-align: center;
  color: white;
`;

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