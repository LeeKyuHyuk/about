import styled from 'styled-components';

const IntroduceWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 52px;
  font-weight: 900;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const SubTitle = styled.h2`
  color: rgb(73, 80, 87);
  font-weight: 700;
`;

type IntroduceProps = {
  title: string;
  subTitle: string;
};

function Introduce({ title, subTitle }: IntroduceProps) {
  return (
    <IntroduceWrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </IntroduceWrapper>
  );
}

export default Introduce;
