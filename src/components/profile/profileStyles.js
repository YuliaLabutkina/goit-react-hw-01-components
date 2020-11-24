import styled from 'styled-components';

const Container = styled.div`
  margin: 30px auto;
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

export default Container;