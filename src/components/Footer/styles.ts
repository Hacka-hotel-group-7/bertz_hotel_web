import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--background-2);
  position: fixed;

  .footer_container {
    display: flex;
    justify-content: space-between;
    padding: 5%;

    .logo_div {
      max-width: 55%;
    }

    .logo_div img {
      width: 195px;
      height: 195px;
      margin-bottom: 10px;
    }
  }

  .quick_access ul li p {
    color: var(--brand-green);
    margin-top: 20px;
  }

  .all_rights {
    border-top: 1.5px solid var(--lightgray);

    p {
      color: var(--brand-green);
      text-align: center;
      padding: 20px;
      margin: 0 auto;
    }
  }
`;
