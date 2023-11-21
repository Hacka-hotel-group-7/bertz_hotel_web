import { StyledH3 } from "../../styles/typography";
import { ButtonStyled } from "../Button/Style";
import { HeaderStyled } from "./styles";

function Header() {
  return (
    <HeaderStyled>
      <div className="header_container">
        <img src="../../../public/logo (1).png" alt="" />
        <nav className="menu">
          <ul>
            <li>
              <StyledH3 fontWeight="semibold">Início</StyledH3>
            </li>
            <li>
              <StyledH3 fontWeight="semibold">Sobre</StyledH3>
            </li>
            <li>
              <StyledH3 fontWeight="semibold">Contato</StyledH3>
            </li>
            {/* <li>Menu 4</li> */}
          </ul>
        </nav>
        <div className="menu_buttons">
          <ButtonStyled>Cadastre-se</ButtonStyled>
          <button className="drop_menu">
            <img src="../../../public/gg_menu.png" alt="" />
            <img src="../../../public/user.png" alt="" />
          </button>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
