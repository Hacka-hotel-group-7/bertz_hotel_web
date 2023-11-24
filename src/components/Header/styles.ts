import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--background);
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  position: fixed;
  z-index: 1;

  .home__button {
    background-color: transparent;
  }

  .header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;
    width: 90%;
  }

  .menu {
    width: 40%;
    ul {
      display: flex;
      justify-content: space-between;

      li {
        cursor: pointer;
      }
    }
  }

  .menu_buttons {
    display: flex;
    justify-content: space-between;
    width: 28%;

    .drop_menu {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100px;
      height: 45px;
      background-color: #e6cebc70;
      border: none;
      border-radius: 23px;
    }
  }
`;
