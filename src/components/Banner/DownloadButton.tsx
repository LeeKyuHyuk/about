import styled from 'styled-components';

const DownloadButton = styled.a`
  text-decoration: none;
  border: 2px solid rgb(134, 142, 150);
  color: rgb(134, 142, 150);
  background: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-top: 3rem;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.3s ease 0s;

  &:hover {
    border: 2px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
  }
`;

export default DownloadButton;
