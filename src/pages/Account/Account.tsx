import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { StyledH1, StyledH2, StyledH3, StyledP } from "../../styles/typography";
import { ButtonStyled } from "../../components/Button/Style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../../providers/GlobalContext/@types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

const Account = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const token = localStorage.getItem('user@TOKEN')
  const { CurrentUser, HotelsList, BedroomsList} = useContext(GlobalContext);
  const [userSettings, setUserSettings] = useState<'reservations' | 'createReservation' | 'reviews' | 'createReviews' |'' >('')
  const [ isSettingsModalOpen, setIsSettingsModalOpen ] = useState(false)
  const [ isReviewModalOpen, setIsReviewModalOpen ] = useState(false)
  const [ isReservationModalOpen, setIsReservationModalOpen ] = useState(false)
  const [isCreateReviewModalOpen, setIsCreateReviewModalOpen] = useState(false)
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
            <div className="menu_buttons">
              <ButtonStyled onClick={() => setUserSettings('reservations')}>Suas Reservas</ButtonStyled>
              <ButtonStyled onClick={() => setUserSettings('createReservation')}>Faça uma reserva</ButtonStyled>
              <ButtonStyled onClick={() => setUserSettings('reviews')}>Seus Comentários</ButtonStyled>
              <ButtonStyled onClick={() => setUserSettings('createReviews')}>Faça um comentário</ButtonStyled>
            </div>
          </div>

          <div>
            <ul>
              { user && userSettings === 'reservations' && user.reservations.length > 0 ? user.reservations.map((reservation) => (
                  <li key={reservation.id}>
                    <StyledP fontWeight="bold" fontSize="medium">Quarto: {reservation.bedroom.room_type}</StyledP>
                    <img src={reservation.bedroom.image} alt="Imagem do quarto" />
                    <p>Check-in: {reservation.checkin_date}</p>
                    <p>Check-out: {reservation.checkout_date ? reservation.checkout_date : "Não informado"}</p>
                    <p>Status: {reservation.status}</p>
                    <p>Pago: {reservation.paid ? "Sim" : "Não"}</p>
                    <p>Forma de pagamento: {reservation.payment_method ? reservation.payment_method : "Não informado"}</p>
                    <p>Total: {reservation.total}</p>
                    <ButtonStyled onClick={() => setIsReservationModalOpen(true)}>Editar sua Reserva</ButtonStyled>
                  </li>
                )) : user && userSettings === 'reservations' && user.reservations.length === 0 ? (
                  <StyledH2 fontWeight="extrabold">Você ainda não possui reservas</StyledH2>
                ) :
                null
              }

              { user && userSettings === 'reviews' && user.reviews.length > 0? user.reviews.map((review) => (
                  <li key={review.id}>
                    <p>Avaliação: {review.classification}</p>
                    <p>Comentário: {review.comments}</p>
                    <ButtonStyled onClick={() => setIsReviewModalOpen(true)}>Editar sua avaliação</ButtonStyled>
                  </li>
                )) : user && userSettings === 'reviews' && user.reviews.length === 0 ? (
                  <StyledH2 fontWeight="extrabold">Você ainda não fez comentários</StyledH2>
                ) : null
              }

              { user && userSettings === 'createReservation' ? (
                BedroomsList.map((bedroom) => (
                  <li key={bedroom.id}>
                    <StyledP fontWeight="bold" fontSize="medium">Quarto: {bedroom.room_type}</StyledP>
                    <img src={bedroom.image} alt="Imagem do quarto" />
                    <ButtonStyled onClick={() => navigate(`/booking/${bedroom.id}`)}>Faça sua reserva</ButtonStyled>
                  </li>
                ))
              ):null
              }

              { user && userSettings === 'createReviews' ? (
                HotelsList.map((hotel) => (
                  <li key={hotel.id}>
                    <StyledH3 fontWeight="bold">{hotel.description}</StyledH3>
                    <img src={hotel.images[0].image} alt="Imagem do quarto" />
                    <ButtonStyled onClick={() => setIsCreateReviewModalOpen(true)}>Crie sua avaliação</ButtonStyled>
                  </li>
                ))
              ):null}
            </ul>
          </div>
        </main>
      <Footer />
      </>
    );
  }
      
    
}

export default Account;
