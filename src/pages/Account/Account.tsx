import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Account() {
  return (
    <>
      <Header />
      <main>
        <div>
          <img src="Foto Perfil" alt="" />
        </div>
        <div>
          <h3>Olá, Fulaninho</h3>
          <button>Editar conta</button>
          <div>
            <img src="Star" alt="" />
            <span>Número de reviews</span>
            <span>Reviews</span>
          </div>
          <div>
            <div>
              <img src="Foto perfil" alt="" />
              <div>
                <p>Nome perfil</p>
                <p>Data do review</p>
                <img src="Icone Editar" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button>Suas Reservas</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Account;
