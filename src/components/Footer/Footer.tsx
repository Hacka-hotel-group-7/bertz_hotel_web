import { StyledH3, StyledP } from "../../styles/typography";
import { FooterStyled } from "./styles";

const  Footer = () => {
  return (
    <FooterStyled>
      <section className="footer_container">
        <div className="logo_div">
          <img
            src="/Imperial2.png"
            alt="Logo do The Bertz Hotel"
          />
          <StyledP fontSize="small" fontWeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </StyledP>
        </div>
        <div className="quick_access">
          <StyledH3 fontWeight="semibold">Links Rápidos</StyledH3>
          <ul>
            <li>
              <StyledP fontSize="small" fontWeight="semibold">
                Home
              </StyledP>
            </li>
            <li>
              <StyledP fontSize="small" fontWeight="semibold">
                Sobre
              </StyledP>
            </li>
            <li>
              <StyledP fontSize="small" fontWeight="semibold">
                Faq
              </StyledP>
            </li>
          </ul>
        </div>
        <div className="quick_access">
          <StyledH3 fontWeight="semibold">Contato</StyledH3>
          <ul>
            <li>
              <StyledP fontSize="small" fontWeight="semibold">
                Fone: 123456789
              </StyledP>
            </li>
            <li>
              <StyledP fontSize="small" fontWeight="semibold">
                E-mail: bertzhoteis@mail.com
              </StyledP>
            </li>
            <li>
              <StyledP fontSize="small" fontWeight="semibold">
                Localização: Rua dos Bobos
              </StyledP>
            </li>
          </ul>
          <div>
            {/* <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" /> */}
          </div>
        </div>
      </section>
      <div className="all_rights">
        <StyledP fontSize="small" fontWeight="bold">
          © 2023 | Todos os direitos reservados.
        </StyledP>
      </div>
    </FooterStyled>
  );
}

export default Footer;
