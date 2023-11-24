import { styled } from "styled-components";

export const RoomsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  .room__link {
    text-decoration: none;
    color: var(--brand-green-2);
    font-family: "Montserrat";
    font-weight: 600;
  }

  li {
    width: 380px;
    height: 490px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
`;

export const HotelStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  .home__link {
    text-decoration: none;
    color: var(--brand-green-2);
    font-family: "Montserrat";
    font-weight: 600;
  }

  li {
    width: 380px;
    height: 490px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
`;
