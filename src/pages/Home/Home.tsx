import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { HomeStyled } from "./styles";
import { IconsHotel, IconsRoom } from "../../components/Icons/Icons";
import { StyledH2, StyledP } from "../../styles/typography";
import { ButtonStyled } from "../../components/Button/Style";

const Home = () => {
  return (
    <>
      <Header />
      <HomeStyled>
        <div className="banner__div">
          <img
            src="../../../public/Bg-image.png"
            alt="Imagem de um hotel de luxo"
          />
          <div className="input__div">
            <input type="text" name="" id="" placeholder="Pesquisa" />
            <button>
              <img src="../../../public/fe_search.png" alt="" />
            </button>
          </div>
        </div>
        <StyledH2 fontWeight="bold">Lista Principal</StyledH2>
        <IconsHotel />
        <div className="about__section">
          <StyledH2 fontWeight="bold">Sobre...</StyledH2>
          <StyledP fontSize="small" fontWeight="semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis in massa quis eleifend. Proin finibus mi et convallis
            dapibus. Nam sapien purus, placerat vel iaculis a, volutpat eget
            urna. In ultricies laoreet mi, id volutpat leo tristique vitae. Nam
            eget placerat sem. Mauris finibus nec dolor bibendum suscipit.
            Maecenas purus arcu, pulvinar at felis id, rutrum sollicitudin
            nulla. Mauris ut mi dui. Suspendisse semper euismod sollicitudin.
          </StyledP>
          <ButtonStyled className="reservation__button">
            Reserva agora
          </ButtonStyled>
        </div>
        <StyledH2 fontWeight="bold" className="bestRooms__section">
          Melhores quartos
        </StyledH2>
        <IconsRoom />
      </HomeStyled>
      <Footer />
    </>
  );
};

export default Home;
