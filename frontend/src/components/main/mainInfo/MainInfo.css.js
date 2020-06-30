import styled, { css } from 'styled-components';

export const MainInfoContainer = styled.div`
  height: 95vh;
  padding: 0 4vw;
  margin: 0 auto;
  font-size: calc(2vmin);
  color: white;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;

  & > .info-title {
    width: 100%;
    height: 20vh;
    background: #262f3b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    margin: 20px 0px;

    & > table > tr > td {
      text-align: right;
    }

    & > table > tr > td:nth-child(2) {
      padding-left: 2rem;
      text-align: left;
    }
  }

  & > .info-contents {
    width: 100%;
    height: 60vh;
    background: #262f3b;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 3vh;
  }

  & > .info-contents > .info-contents-title {
    width: 100%;
    height: 10%;
    background: #1f242c;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .info-contents > .info-contents-container {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ${props =>
    props.displayMenuName === 'icon' && (props.alignOption === 'vertical' || props.alignOption === 'area') &&
    css`justify-content: flex-start;`
  }
`

export const MainInfoContent = styled.div`
  width: 90%;
  height: 90%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & > div {
    height: 19.5%;
    border: solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
      props.status === '0' && css`background: #50bb5b;`
    }

    ${props =>
      props.status === '1' && css`background: #e8ad2e;`
    }

    ${props =>
      props.status === '2' && css`background: #ff0018;`
    }
  }
`