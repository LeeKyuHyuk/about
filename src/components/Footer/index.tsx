import styled from 'styled-components';
import Logo from './Logo';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;
  margin-top: 100px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;

const Year = styled.div`
  color: rgb(206, 212, 218);
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 700;
`;

type FooterProps = {
  year: string;
  initial: string;
  name: string;
};

function Footer({ year, initial, name }: FooterProps) {
  return (
    <FooterWrapper>
      <Year>© {year}</Year>
      <Logo initial={initial} name={name} />
    </FooterWrapper>
  );
}

export default Footer;
