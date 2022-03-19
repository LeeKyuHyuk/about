import styled from 'styled-components';

const SpeicalizedWrapper = styled.div`
  display: flex;
  height: 450px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Item = styled.img`
  width: 64px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

type SpeicalizedProps = {
  images: any[];
};

function Speicalized({ images }: SpeicalizedProps) {
  return (
    <SpeicalizedWrapper>
      <Title>Speicalized in</Title>
      <ItemList>
        {images.map((item, index) => (
          <Item key={index} src={item} />
        ))}
      </ItemList>
    </SpeicalizedWrapper>
  );
}

export default Speicalized;
