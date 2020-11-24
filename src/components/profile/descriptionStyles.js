import styled from 'styled-components';

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

export { DescriptionWrap, Img, Name, Tag, Location };