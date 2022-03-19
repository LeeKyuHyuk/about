import styled from 'styled-components';

const ColumnWrapper = styled.div`
  background: ${(props) => props.color};
  height: 300px;
  border-radius: 24px;
  padding: 40px;
  transition: all 0.3s ease 0s;
  ${(props) => props.id === 'middle' && 'grid-column: 1 / 3;'}
  ${(props) => props.id === 'large' && 'grid-column: 1 / 4;'}
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 90px;
  }

  @media (max-width: 930px) {
    grid-column: 1 / auto;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const Content = styled.div`
  ${(props) => props.id === 'center' && 'text-align: center;'}
  ${(props) => props.id === 'left' && 'flex: 2 1 0%;'}
`;

const Title = styled.span`
  display: block;
  font-weight: 700;
  color: ${(props) => props.color};
`;

const SubTitle = styled.h1`
  display: block;
  margin-top: 0px;
  font-weight: 900;
  color: rgb(52, 58, 64);
  margin-bottom: 10px;
  color: ${(props) => props.color};
`;

const Description = styled.div`
  display: block;
  color: ${(props) => props.color};
`;

const Image = styled.img`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 16px;
  position: relative;
  max-height: 100px;
`;

type ColumnProps = {
  size: 'small' | 'middle' | 'large';
  columnColor: string;
  textAlign: 'left' | 'center';
  title?: string;
  titleColor?: string;
  subTitle?: string;
  subTitleColor?: string;
  descriptions?: string[];
  descriptiosColor?: string;
  image?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function Column({
  size,
  columnColor,
  textAlign,
  title,
  titleColor,
  subTitle,
  subTitleColor,
  descriptions,
  descriptiosColor,
  image,
  onClick,
}: ColumnProps) {
  return (
    <ColumnWrapper color={columnColor} id={size} onClick={onClick}>
      <Container>
        <Content id={textAlign}>
          {image && <Image src={image} />}
          {title && <Title color={titleColor}>{title}</Title>}
          {subTitle && <SubTitle color={subTitleColor}>{subTitle}</SubTitle>}
          {descriptions?.map((description, index) => (
            <Description key={index} color={descriptiosColor}>
              {description}
            </Description>
          ))}
        </Content>
      </Container>
    </ColumnWrapper>
  );
}

export default Column;
