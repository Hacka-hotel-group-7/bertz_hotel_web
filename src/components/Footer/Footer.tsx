import { StyledH3 } from "../../styles/typography";
import { FooterStyled } from "./styles";

function Footer() {
  return (
    <FooterStyled>
      <section className="footer_container">
        <div>
          <img
            src="../../../public/Imperial2.png"
            alt="Logo do The Bertz Hotel"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <StyledH3 fontWeight="semibold">Links Rápidos</StyledH3>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <StyledH3 fontWeight="semibold">Contato</StyledH3>
          <ul>
            <li>Fone: 1234567890</li>
            <li>E-mail: bertzhoteis@mail.com</li>
            <li>Localização: Rua dos Bobos</li>
          </ul>
          <div>
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
          </div>
        </div>
      </section>
      <div>
        <p>© 2023 | Todos os direitos reservados.</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
