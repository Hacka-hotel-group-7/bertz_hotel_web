import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { HomeStyled } from "./styles";

function Home() {
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
        <ul>
          <li>Hotel 1</li>
          <li>Hotel 2</li>
          <li>Hotel 3</li>
        </ul>
        <div>
          <h3>Sobre...</h3>
          <p>Lorem ipsum</p>
          <button>Botão 2</button>
        </div>
        <h2>Melhores quartos</h2>
        <ul>
          <li>Quarto</li>
          <li>Quarto</li>
          <li>Quarto</li>
          <li>Quarto</li>
          <li>Quarto</li>
          <li>Quarto</li>
          <li>Quarto</li>
          <li>Quarto</li>
        </ul>
      </HomeStyled>
      <Footer />
    </>
  );
}

export default Home;
