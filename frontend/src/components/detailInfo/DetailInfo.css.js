import styled from 'styled-components';

export const DetailInfoContainer = styled.div`
  max-height: 90vh;
  max-width: 95vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(2vmin);
  color: white;
  overflow-y: scroll;

  @media (max-width: 550px) {
    height: 77vh;
    overflow-y: auto;
  }
`;