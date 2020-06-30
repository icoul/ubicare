import styled, { css } from 'styled-components';

export const MainInfoContainer = styled.div`
  height: 93vh;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    margin: 20px 0px;
    
    & > div {
      display: flex;
      flex-direction: column;
      flex: 3;
      border-right: 1px solid;
    }

    & > div:last-child {
      border-right-width: 0px;
    }

    & > div > div:nth-child(2) {
      font-size: 8vh;
    }

    & > div:nth-child(3) > div:nth-child(2) {
      color: #50bb5b;
    }

    & > div:nth-child(4) > div:nth-child(2) {
      color: #ff0018;
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
  padding: 10px;
  border: solid 1px #fff;

  & > div {
    height: 10%;
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

  & > .info-main-contents {
    height: 27%;
    font-size: 5vh;
  }
`