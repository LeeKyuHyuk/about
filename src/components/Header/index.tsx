import styled from 'styled-components';
import ContactItem from '../../types/ContactItem';
import Contact from './Contact';
import Logo from './Logo';

const HeaderWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);
  height: 60px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

type HeaderProps = {
  initial: string;
  name: string;
  contacts: ContactItem[];
};

function Header({ initial, name, contacts }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Logo initial={initial} name={name} />
      <Contact items={contacts} />
    </HeaderWrapper>
  );
}

export default Header;
