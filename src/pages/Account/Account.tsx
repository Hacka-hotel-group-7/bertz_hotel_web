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
import { EditProfile } from "../../components/EditProfile";
import { ReservationsIcons } from "../../components/userIcons/reservation";
import { CreateReview, EditReview } from "../../components/userIcons/reviews";

const Account = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const token = localStorage.getItem('user@TOKEN')
  const { CurrentUser, HotelsList, BedroomsList, isReviewModalOpen, setIsReviewModalOpen, isCreateReviewModalOpen, setIsCreateReviewModalOpen} = useContext(GlobalContext);
  const [userSettings, setUserSettings] = useState<'reservations' | 'createReservation' | 'reviews' | 'createReviews' |'editProfile'|'' >('')
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
            <ButtonStyled onClick={() => setUserSettings('editProfile')}>Editar conta</ButtonStyled>
            <div className="menu_buttons">
              <ButtonStyled onClick={() => setUserSettings('reservations')}>Suas Reservas</ButtonStyled>
              <ButtonStyled onClick={() => setUserSettings('createReservation')}>Faça uma reserva</ButtonStyled>
              <ButtonStyled onClick={() => setUserSettings('reviews')}>Seus Comentários</ButtonStyled>
              <ButtonStyled onClick={() => setUserSettings('createReviews')}>Faça um comentário</ButtonStyled>
            </div>
          </div>

          <div>
            <ul>
              { user && userSettings === 'editProfile' ? (
                <EditProfile user={user}/>
                ) : null
              }

              { user && userSettings === 'reservations' && user.reservations.length > 0 ? user.reservations.map((reservation) => (
                  <ReservationsIcons reservation={reservation}/>
                )) : user && userSettings === 'reservations' && user.reservations.length === 0 ? (
                  <StyledH2 fontWeight="extrabold">Você ainda não possui reservas</StyledH2>
                ) :
                null
              }

              { user && userSettings === 'reviews' && user.reviews.length > 0? user.reviews.map((review) => (
                  <li key={review.id}>
                    <p>Avaliação: {review.classification}</p>
                    <p>Comentário: {review.comments}</p>
                    <ButtonStyled onClick={() =>{
                      setIsReviewModalOpen(!isReviewModalOpen),
                      localStorage.setItem('review', JSON.stringify(review))
                    } 
                    }>Editar sua avaliação</ButtonStyled>
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
                    <ButtonStyled onClick={(e) =>{
                      e.preventDefault();
                      setIsCreateReviewModalOpen(!isCreateReviewModalOpen);
                      localStorage.setItem('hotel', hotel.id)}
                    } >Crie sua avaliação</ButtonStyled>
                  </li>
                ))
              ):null}
            </ul>
          </div>
        { isReviewModalOpen && (
          <EditReview review={JSON.parse(localStorage.getItem('review')!)}/>
        )}
        { isCreateReviewModalOpen && (
          <CreateReview hotelId={localStorage.getItem('hotel')!}/>
        )}
        </main>
      <Footer />
      </>
    );
  }
      
    
}

export default Account;
