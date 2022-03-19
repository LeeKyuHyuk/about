import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const MainWrapper = styled.main`
  width: 800px;
`;

type ContentProps = {
  children: JSX.Element;
};

function Content({ children }: ContentProps) {
  return (
    <ContentWrapper>
      <MainWrapper>{children}</MainWrapper>
    </ContentWrapper>
  );
}

export default Content;
