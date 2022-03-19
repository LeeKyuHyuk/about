import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
  }
`;

export default Grid;
