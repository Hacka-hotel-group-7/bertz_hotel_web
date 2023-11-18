import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function ReservationForm() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h2>Formulário de Reserva</h2>
          <form action="">
            AQUI VAI O FORMULÁRIO DE RESERVA
            <button>Confirmar Reserva</button>
          </form>
        </div>
        <div>
          <div>
            <img src="Foto do Hotel" alt="" />
            <div>
              <p>Nome do Hotel</p>
              <p>Endereço</p>
              <div>
                <span>2 Camas</span>
                <span>Suíte</span>
                <span>Estacionamento</span>
              </div>
            </div>
          </div>
          <div>
            <h4>Ideal para:</h4>
            <ol>
              <li>Turismo</li>
              <li>Trabalho</li>
              <li>Eventos</li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ReservationForm;
