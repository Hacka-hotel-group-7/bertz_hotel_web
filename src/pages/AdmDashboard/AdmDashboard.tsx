import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { AdmContext } from "../../providers/AdmContext/AdmContext";
import { useEffect, useState } from "react";
import {  IUser } from "../../providers/GlobalContext/@types";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/Style";
import { StyledH1, StyledP } from "../../styles/typography";

const AdmDashboard = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const token = localStorage.getItem('user@TOKEN')
    const { CurrentUser, HotelsList, BedroomsList} = useContext(GlobalContext);
    const { PromotionsList, AllReservations, UserList } = useContext(AdmContext);
    console.log(PromotionsList)
    console.log(AllReservations)
    console.log(UserList)
    const navigate = useNavigate();

  useEffect(() => {
    if(CurrentUser){
      try{
          const getUserById = async () => {
            const { data } = await api.get<IUser>(`users/${CurrentUser.user_id}/`,{
              headers: {
                  'Authorization': `Bearer ${token}`
              }});
            setUser(data)}
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
    return(
        <>
        <Header/>
            <StyledH1 fontWeight="extrabold">{user?.name}</StyledH1>


        <Footer/>
        </>
    )}
}

export default AdmDashboard