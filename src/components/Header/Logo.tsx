import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const InitialWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: 700;
  cursor: default;
`;

const NameWrapper = styled.div`
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: rgb(0, 0, 0);
  cursor: default;
`;

type LogoProps = {
  initial: string;
  name: string;
};

function Logo({ initial, name }: LogoProps) {
  return (
    <LogoWrapper>
      <InitialWrapper>{initial}</InitialWrapper>
      <NameWrapper>{name}</NameWrapper>
    </LogoWrapper>
  );
}

export default Logo;
