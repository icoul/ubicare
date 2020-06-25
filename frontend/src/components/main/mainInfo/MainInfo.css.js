import styled, { css } from 'styled-components';

export const MainInfoContainer = styled.div`
  height: 90vh;
  padding: 0 4vw;
  margin: 0 auto;
  font-size: calc(2vmin);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  ${props =>
    props.displayMenuName === 'icon' && (props.alignOption === 'vertical' || props.alignOption === 'area') &&
    css`justify-content: flex-start;`
  }
`
