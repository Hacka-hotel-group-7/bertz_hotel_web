import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../../components/Login/LoginSchema";
import { IGlobalContext, IGlobalProviderProps, ICurrentUser, IHotel, IBedroom, IUser } from "./@types";
import { TGuestRegisterSchema } from "../../components/Register/RegisterSchema";
import { TReservationSchema } from "../../components/Reservations/ReservationSchema";
import { TReviewSchema } from "../../components/userIcons/reviews/ReviewSchema";

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
    const token = localStorage.getItem('user@TOKEN')
    const [CurrentUser, setCurrentUser] = useState<ICurrentUser | null>(null)
    const [HotelsList, setHotelsList] = useState<IHotel[]>([])
    const [Hotel, setHotel] = useState<IHotel | null>(null)
    const [SuggestedHotels, setSuggestedHotels] = useState<IHotel[]>([])
    const [BedroomsList, setBedroomsList] = useState<IBedroom[]>([])
    const [AllBedroomsList, setAllBedroomsList] = useState<IBedroom[]>([])
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [ isReviewModalOpen, setIsReviewModalOpen ] = useState(false)
    const [isCreateReviewModalOpen, setIsCreateReviewModalOpen] = useState(false)
    const navigate = useNavigate();

    const login = async (formData: TLogin) => {

        try{
            const { data } = await api.post('login/', formData);
            localStorage.setItem('user@TOKEN', data.access);
            localStorage.setItem('user@NAME', formData.username);
            const decoded = jwtDecode<ICurrentUser>(data.access);
            localStorage.setItem('user@INFO', JSON.stringify(decoded));
            toast.success('Login efetuado com sucesso!');
            setCurrentUser(decoded)
            if (decoded.role === 'hospede'){
                navigate('/user')
            } else{
                navigate('/adm/dashboard')
            }

        }catch{
            toast.error('Email invalido');
        }
    }
    const logOut = () => {
        localStorage.removeItem('user@TOKEN');
        localStorage.removeItem('user@ID');
        localStorage.removeItem('user@NAME');
        setCurrentUser(null)
        toast.success('Logout realizado')
        navigate('/')
    }
    const createUser = async (formData: TGuestRegisterSchema) => {
        const {confirmPassword, ...newFormData} = formData
        try{
            await api.post('users/', newFormData);
            toast.success('Conta criada com sucesso!')
            if(formData.username && formData.password ){

                const loginBody = {
                    username: formData.username,
                    password: formData.password
                }
    
               await login(loginBody)
            }
            
        }catch(err){
            toast.error(`${err}`)
        }
       
    }
    
    const updateUser = async (formData: TGuestRegisterSchema, user_id: string) => {
        try{
            await api.patch(`users/${user_id}/`, formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Conta atualizada com sucesso!')
        }catch(err){
            toast.error(`${err}`)
        }
    }
    const deleteUser = async (user_id: string) => {
        try{
            await api.delete(`users/${user_id}/`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Conta excluída com sucesso!')
        }catch(err){
            toast.error(`${err}`)
        }
    }
   
    const getHotelById = async (hotel_id: string) => {
        try{
            const { data } = await api.get<IHotel | null>(`hotel/${hotel_id}/`);
            setHotel(data)
            setSuggestedHotels(HotelsList.filter(element => element.id !== hotel_id))

        }catch(err){
            toast.error(`${err}`)
        }
    }

    //Reservation Requests
    const createReservation = async (formData: TReservationSchema) => {
        try {
            const { data } = await api.post('bookings/', formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Reserva efetuada com sucesso!')
            return data
            
        } catch (error) {
            toast.error(`${error}`)	            
        }
    }
    const updateReservation = async (formData:string, booking_id: string) => {
        try {
            const { data } = await api.patch(`bookings/${booking_id}/`, formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Reserva atualizada com sucesso!')

            return data
            
        } catch (error) {
            toast.error(`${error}`)	            
        }
    }

    //Review Requests
    const createReview = async (formData: TReviewSchema, hotel_id: string) => {
        try {
            await api.post(`reviews/${hotel_id}/`, formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Revisão efetuada com sucesso!')
            
        } catch (error) {
            toast.error(`${error}`)	            
        }
        
    }

    const updateReview = async (formData: TReviewSchema, review_id: string) => {
        try {
            await api.patch(`review/${review_id}/`, formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Revisão atualizada com sucesso!')
        } catch (error) {
            toast.error(`${error}`)
        }
    }

    const deleteReview = async (review_id: string) => {
        try{
            await api.delete(`review/${review_id}/`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Revisão excluída com sucesso!')
        }catch(err){
            toast.error(`${err}`)
        }
    }

    useEffect( () => {
        try{
            const getAllHotels = async () => {
                const { data } = await api.get<IHotel[]>('hotel/');
                setHotelsList(data)
            }
            const getAllBedrooms = async () => {
                const { data } = await api.get<IBedroom[]>('bedroom/');
                setAllBedroomsList(data)
                const avaliableBedrooms = data.filter(element => element.status == 'disponível')
                setBedroomsList(avaliableBedrooms)
            }

            getAllHotels();
            getAllBedrooms();

            let user = localStorage.getItem('user@INFO')
            if(user && CurrentUser){
                const currentUser = JSON.parse(user)
                setCurrentUser(currentUser)

                if(currentUser.role === 'hospede'){
                    navigate('/user')
                }else{
                    navigate('/adm/dashboard')
                }
            }
        
        }catch{
            toast.error('Não foi possível buscar os hoteis')
        }
        
    }, [])
    
    return(
        <GlobalContext.Provider value={{
            login,
            logOut,
            createUser,
            updateUser,
            deleteUser,
            getHotelById,
            CurrentUser,
            setCurrentUser,
            HotelsList,
            setHotelsList,
            Hotel,
            setHotel,
            SuggestedHotels,
            setSuggestedHotels,
            BedroomsList,
            setBedroomsList,
            createReservation,
            updateReservation,
            isLoginModalOpen,
            setIsLoginModalOpen,
            AllBedroomsList,
            createReview,
            updateReview,
            deleteReview,
            isReviewModalOpen, 
            setIsReviewModalOpen,
            isCreateReviewModalOpen, setIsCreateReviewModalOpen

        }}>
            {children}
        </GlobalContext.Provider>
    )
}