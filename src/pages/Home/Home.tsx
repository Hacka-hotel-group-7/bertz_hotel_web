import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { HomeStyled } from "./styles";
import { IconsHotel, IconsRoom } from "../../components/Icons/Icons";

const Home = () => {
  return (
    <>
      <Header />
      <HomeStyled>
        <div>
          <img
            src="../../../public/Bg-image.png"
            alt="Imagem de um hotel de luxo"
          />
          <div>
            <input type="text" name="" id="" placeholder="Pesquisa" />
            <img src="Lupa" alt="" />
          </div>
        </div>
        <h2>Lista Principal</h2>
        <IconsHotel />
        <div>
          <h3>Sobre...</h3>
          <p>Lorem ipsum</p>
          <button>Botão 2</button>
        </div>
        <h2>Melhores quartos</h2>
        <IconsRoom/>
      </HomeStyled>
      <Footer/>
    </>
  );
}

export default Home;
