import styled from 'styled-components';
import Button from './Button';

const Headline = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  letter-spacing: 0.15px;
  color: #000000;
  margin: 8px 0px;
`;

const Body = styled.div`
  margin: 8px 0px;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  font-size: 14px,
  line-height: 16.4px,
  letter-spacing: 0.13px,
`;

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  animation: modal-background-effect 0.3s;

  @keyframes modal-background-effect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalLayout = styled.section`
  width: 700px;
  max-height: 90%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #ffffff;
  animation: modal-popup 0.3s;
  overflow: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 715px) {
    margin: 0 8px;
  }

  @keyframes modal-popup {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const ModalHeader = styled.header`
  position: relative;
  padding: 16px 0px 0px 24px;
`;

const ModalBody = styled.main`
  padding: 8px 24px;
  word-break: keep-all;
`;

const ModalFooter = styled.footer`
  padding: 0px 24px 24px 0px;
  text-align: right;
`;

type ModalProps = {
  title: string;
  content: JSX.Element;
  visible: boolean;
  onClose(): void;
};

function Modal({ title, content, visible, onClose }: ModalProps) {
  return visible ? (
    <ModalWrapper>
      <ModalLayout>
        <ModalHeader>
          <Headline>{title}</Headline>
        </ModalHeader>
        <ModalBody>
          <Body>{content}</Body>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalLayout>
    </ModalWrapper>
  ) : (
    <></>
  );
}

export default Modal;
