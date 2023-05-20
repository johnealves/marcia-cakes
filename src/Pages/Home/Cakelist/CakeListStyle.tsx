import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flexWrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`