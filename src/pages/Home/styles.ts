import { styled } from "styled-components";

export const HomeStyled = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-top: 128px;

  h2 {
    margin-bottom: 15px;
  }

  .banner__div {
    width: 100%;
    z-index: 0;

    > img {
      width: 100%;
    }
  }

  .input__div {
    z-index: 100;
    margin: 0 auto;
    max-width: 800px;
    width: 50%;
    height: 70px;
    background-color: var(--lightred);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      background-color: transparent;
      padding-left: 20px;
      width: 80%;
    }

    button {
      background-color: var(--brand-green);
      width: 55px;
      height: 55px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }

    button img {
    }
  }

  .about__section {
    margin: 15px 0 5px 0;
  }

  .reservation__button {
    margin: 15px 0;
  }

  .bestRooms__section {
    margin-bottom: 20px;
  }
`;
