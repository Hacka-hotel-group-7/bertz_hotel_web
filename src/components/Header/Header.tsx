import { StyledH3 } from "../../styles/typography";
import { ButtonStyled } from "../Button/Style";
import { HeaderStyled } from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { LoginModal, LogoutModal } from "../Login/index";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const { CurrentUser, isLoginModalOpen, setIsLoginModalOpen } =
    useContext(GlobalContext);

  return (
    <HeaderStyled>
      <div className="header_container">
        <img src="/logo (1).png" alt="" />
        <nav className="menu">
          <ul>
            <li>
              <button onClick={() => navigate("/")} className="home__button">
                <StyledH3 fontWeight="semibold">Início</StyledH3>
              </button>
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
          <ButtonStyled onClick={() => navigate("/register")}>
            Cadastre-se
          </ButtonStyled>
          <button
            className="drop_menu"
            onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
          >
            <img src="../../public/gg_menu.png" alt="" />
            <img src="/user.png" alt="" />
          </button>
        </div>
        {!CurrentUser && isLoginModalOpen && <LoginModal />}
        {CurrentUser && isLoginModalOpen && <LogoutModal />}
      </div>
    </HeaderStyled>
  );
};

export default Header;
