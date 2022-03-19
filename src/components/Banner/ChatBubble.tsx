import styled from 'styled-components';

const ChatBubble = styled.div`
  position: absolute;
  top: 200px;
  margin-left: 525px;
  background: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 24px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
  border-radius: 8px;
  padding: 1rem;

  @media (max-width: 930px) {
    top: 300px;
    left: initial;
    right: 15px;
    margin: 0;
  }
`;

export default ChatBubble;
