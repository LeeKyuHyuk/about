import styled from 'styled-components';

const CommonButton = styled.button`
  min-width: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: #607d8b;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 16px;
  display: inline;
  vertical-align: middle;

  &:hover {
    background: #b0bec5;
  }

  &:active {
    background: #607d8b;
    box-shadow: none;
  }
`;

const ButtonIcon = styled.img`
  height: 13px;
  display: inline;
  vertical-align: middle;
  margin: 0px 4px;
  filter: brightness(0) invert(1);
`;

const ButtonText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12px;
  color: #ffffff;
`;

type ButtonProps = {
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

function Button({ icon, onClick, children }: ButtonProps) {
  return (
    <CommonButton onClick={onClick}>
      <ButtonText>{children}</ButtonText>
      {icon && <ButtonIcon src={`/images/${icon}`} />}
    </CommonButton>
  );
}

export default Button;
