import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr, 2fr);
  }
`;

export default AppWrapper;