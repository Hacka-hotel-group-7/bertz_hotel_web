import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { StyledH1, StyledP } from "../../styles/typography";
import { ButtonStyled } from "../../components/Button/Style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../../providers/GlobalContext/@types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

const Account = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const token = localStorage.getItem('user@TOKEN')
  const { CurrentUser} = useContext(GlobalContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(CurrentUser){
      try{
          const getUserById = async () => {
            const { data } = await api.get<IUser>(`users/${CurrentUser.user_id}/`,{
              headers: {
                'Authorization': `Bearer ${token}`
              }});
              setUser(data)
          }
          getUserById()
        }catch(err){
            toast.error(`${err}`)
        }
      }
    
  }, [])

  if(!CurrentUser){
    return (
    <>
      <Header />
      <div>
        <StyledH1 fontWeight="extrabold">Você não tem acesso a essa página</StyledH1>
        <ButtonStyled onClick={() => navigate("/")}>Voltar para página inicial</ButtonStyled>
        <StyledP fontSize="small" fontWeight="normal">Ou faça seu cadastro</StyledP>
        <ButtonStyled onClick={() => navigate("/register")}>Crie sua conta</ButtonStyled>
      </div>
      <Footer />
    </>
    )
  }else{
    return (
      <>
        <Header />
        <main>
          <div>
            <img src="/user.png" alt="User" />
          </div>
          <div>
            <h3>Olá, {user?.name}</h3>
            <ButtonStyled>Editar conta</ButtonStyled>
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
            <ButtonStyled>Suas Reservas</ButtonStyled>
            <ul>
              { user ? user.reservations.map((reservation) => (
                <li key={reservation.id}>
                    <StyledP fontWeight="bold" fontSize="medium">Quarto: {reservation.bedroom.room_type}</StyledP>
                    <img src={reservation.bedroom.image} alt="Imagem do quarto" />
                    <p>Check-in: {reservation.checkin_date}</p>
                    <p>Check-out: {reservation.checkout_date ? reservation.checkout_date : "Não informado"}</p>
                    <p>Status: {reservation.status}</p>
                    <p>Pago: {reservation.paid ? "Sim" : "Não"}</p>
                    <p>Forma de pagamento: {reservation.payment_method ? reservation.payment_method : "Não informado"}</p>
                    <p>Total: {reservation.total}</p>
                </li>
              )) : null
                    
              }
            </ul>
          </div>
        </main>
        <Footer />
      </>
    );
  }
      
    
}

export default Account;
