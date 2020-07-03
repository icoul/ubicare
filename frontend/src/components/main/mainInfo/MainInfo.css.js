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
    margin: 20px 0px;
    font-size: 3vh;
    
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

  @media (max-width: 550px) {
    height: 77vh;

    & > .info-title {
      font-size: 2vh;

      & > div > div:nth-child(2) {
        font-size: 4vh;
      }
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
    flex-wrap: wrap;
    overflow-y: scroll;
  }

  @media (max-width: 550px) {
    & > .info-contents {
      font-size: 2vh;
    }

    & > .info-contents > .info-contents-container {
      flex-direction: column;
    }
  }

  ${props =>
    props.displayMenuName === 'icon' && (props.alignOption === 'vertical' || props.alignOption === 'area') &&
    css`justify-content: flex-start;`
  }
`

export const MainInfoContent = styled.div`
  ${props =>
    css`
      width: ${props.length > 15 ? 6.5 : 95 / props.length}%
      height: ${props.length > 15 ? 100 / (props.length / 15) : 80 * props.length / 15}%;
    `
  }
  
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px;
  border: solid 1px #fff;
  
  ${props =>
    props.status === '0' && css`background: #50bb5b;`
  }

  ${props =>
    props.status === '1' && css`background: #e8ad2e;`
  }

  ${props =>
    props.status === '2' && css`background: #ff0018;`
  }

  & > div.info-main-contents {
    height: 34%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
      css`
        font-size: ${props.length > 15 ? '.7' : 0.5 * 15 / props.length}em
      `
    }
  }

  & > div.info-sub-contents-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props =>
      css`
        font-size: ${props.length > 15 ? '.4' : 0.2 * 15 / props.length}em
      `
    }

    & > div {
      width: 100%;

      & > svg {
        width: 15%;
        height: 15%;
      }
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    padding: 5px;
    margin: 5px;
    flex-direction: row;

    & > div.info-main-contents {
      width: 24%;
      height: 100%;
      font-size: 2vh;
    }

    & > div.info-sub-contents-container {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div.info-sub-contents-container > div {
      height: 25%;
      font-size: 1vh;
    }
  }
`