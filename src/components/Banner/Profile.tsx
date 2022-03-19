import styled from 'styled-components';

const ProfileWrapper = styled.img`
  position: relative;
  margin-bottom: 25px;
  border-radius: 70%;
  object-fit: cover;
  height: 250px;
  width: 250px;
`;

type ProfileProps = {
  picture: any;
};

function Profile({ picture }: ProfileProps) {
  return <ProfileWrapper src={picture} />;
}

export default Profile;
