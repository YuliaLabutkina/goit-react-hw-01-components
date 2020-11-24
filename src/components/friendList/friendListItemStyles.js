import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
  transition: transform 400ms linear, box-shadow 200ms linear;
  &:hover {
  transform: scale(1.03);
  box-shadow: 0 14px 28px rgba(0,0,0,0.35), 0 10px 10px rgba(0,0,0,0.32) ;
  }
  &:not(:last-child) {
      margin-bottom: 16px;
  }
`;

const IsOnline = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Img = styled.img`
  margin-right: 20px;
  padding: 10px 0;
  width: 48px;
`;

const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export { Item, IsOnline, Img, Name };