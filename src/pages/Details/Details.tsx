import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Details() {
  return (
    <>
      <Header />
      <main>
        <ul>
          <li>
            <img src="Imagem do Quarto" alt="" />
          </li>
          <li>
            <img src="Imagem do Quarto" alt="" />
          </li>
          <li>
            <img src="Imagem do Quarto" alt="" />
          </li>
          <li>
            <img src="Imagem do Quarto" alt="" />
          </li>
          <li>
            <img src="Imagem do Quarto" alt="" />
          </li>
        </ul>
        <div>
          <div>
            <h3>Nome do hotel</h3>
            <p>Endereço</p>
            <div>
              <img src="Serviços Disponíveis" alt="" />
              <img src="Serviços Disponíveis" alt="" />
              <img src="Serviços Disponíveis" alt="" />
              <img src="Serviços Disponíveis" alt="" />
            </div>
            <h4>Descrição do quarto</h4>
            <p>lorem ipsum</p>
          </div>
          <div>
            <h4>Valor da diária R$</h4>
            <p>Ideal para:</p>
            <ol>
              <li>Turismo</li>
              <li>Trabalho</li>
              <li>Eventos</li>
            </ol>
            <button>Reserve Agora</button>
          </div>
        </div>
        <div>
          <h3>Incluso na diária</h3>
          <ul>
            <li>
              <img src="ícone" alt="" />
              <span>Café da manhã</span>
            </li>
            <li>
              <img src="ícone" alt="" />
              <span>Ar-condicionado</span>
            </li>
            <li>
              <img src="ícone" alt="" />
              <span>Lavanderia</span>
            </li>
            <li>
              <img src="ícone" alt="" />
              <span>TV com Netflix</span>
            </li>
            <li>
              <img src="ícone" alt="" />
              <span>Wi-Fi</span>
            </li>
            <li>
              <img src="ícone" alt="" />
              <span>Varanda</span>
            </li>
          </ul>
        </div>
        <div>AQUI VAI O MAPA!</div>
        <div>
          <div>
            <h3>Reviews</h3>
            <img src="Estrela" alt="" />
            <span>Média das reviews</span>
          </div>
          <div>
            <ul>
              <li>
                <span>Estadia</span>
                <span>Média</span>
              </li>
              <li>
                <span>Localização</span>
                <span>Média</span>
              </li>
              <li>
                <span>Custo-benefício</span>
                <span>Média</span>
              </li>
              <li>
                <span>Serviços</span>
                <span>Média</span>
              </li>
              <li>
                <span>Estrutura</span>
                <span>Média</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div>
                  <img src="Foto perfil" alt="" />
                  <span>Nome perfil</span>
                  <span>Data do review</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li>
                <div>
                  <img src="Foto perfil" alt="" />
                  <span>Nome perfil</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li>
                <div>
                  <img src="Foto perfil" alt="" />
                  <span>Nome perfil</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li>
                <div>
                  <img src="Foto perfil" alt="" />
                  <span>Nome perfil</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
