import styled from 'styled-components';
import ContactItem from '../../types/ContactItem';

const IconWrapper = styled.a`
  font-size: 28px;
  color: inherit;
  text-decoration: none;
  margin: 8px;
`;

function ContactIcon(item: ContactItem, index: number) {
  return (
    <li key={index}>
      <IconWrapper href={item.url}>{item.icon}</IconWrapper>
    </li>
  );
}

const ContactWrapper = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 24px;
  color: rgb(134, 142, 150);
  transition: all 0.3s ease 0s;
`;

type ContactProps = {
  items: ContactItem[];
};

function Contact({ items }: ContactProps) {
  return <ContactWrapper>{items.map((item, index) => ContactIcon(item, index))}</ContactWrapper>;
}

export default Contact;
