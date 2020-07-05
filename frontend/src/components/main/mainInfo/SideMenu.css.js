import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  width: 3vw;
  height: 100%;
  position: fixed;
  left: 0px;
  background: #262f3b;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    width: 2vw;
    height: 2vw;
    margin: .5rem;
    cursor: pointer;
    color: #1f242c;
  }

  & > svg.active {
    color: #fff;
  }
`