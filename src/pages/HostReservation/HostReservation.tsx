import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HostReservation = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Suas reservas</h2>
        <ul>
          <li>Agendadas</li>
          <li>Ultimas</li>
          <li>Canceladas</li>
        </ul>
        <div>
          <ul>
            <li>
              <img src="Imagem do hotel" alt="" />
              <div>
                <p>Nome do hotel</p>
              </div>
              <div>
                <span>Check-in:</span>
                <span>Duração:</span>
                <span>Acompanhantes:</span>
              </div>
              <div>
                <span>Em nome de:</span>
              </div>
              <button>Cancelar</button>
            </li>
            <li>
              <img src="Imagem do hotel" alt="" />
              <div>
                <p>Nome do hotel</p>
              </div>
              <div>
                <span>Check-in:</span>
                <span>Duração:</span>
                <span>Acompanhantes:</span>
              </div>
              <div>
                <span>Em nome de:</span>
              </div>
              <button>Cancelar</button>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HostReservation;
