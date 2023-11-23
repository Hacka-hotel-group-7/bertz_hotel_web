import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ReservationPage } from "../../components/Reservations";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { StyledH1, StyledP } from "../../styles/typography";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/Style";

const ReservationForm = () => {
  const navigate = useNavigate();
  const { CurrentUser, isLoginModalOpen, setIsLoginModalOpen } = useContext(GlobalContext);


  return (
    <>
      <Header />
      <main>
        { CurrentUser ? (
            <div>
            <ReservationPage />
          </div>
          ) : (
            <div>
              <StyledH1 fontWeight="bold">Faça login para fazer sua reserva</StyledH1>
              <ButtonStyled onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>Login</ButtonStyled>
              <StyledP fontSize="small" fontWeight="normal">Não possui uma conta?</StyledP>
              <ButtonStyled onClick={() => navigate("/register")}>Crie sua conta</ButtonStyled>
              
            </div>
          )
        }
        
      </main>
      <Footer />
    </>
  );
}

export default ReservationForm;
