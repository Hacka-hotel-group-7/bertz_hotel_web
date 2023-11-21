import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../../components/Login/LoginSchema";
import { IGlobalContext, IGlobalProviderProps, ICurrentUser, IHotel, IBedroom } from "./@types";
import { TGuestRegisterSchema } from "../../components/Register/RegisterSchema";
import { TReservationSchema } from "../../components/Reservations/ReservationSchema";

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
    const token = localStorage.getItem('user@TOKEN')
    const [CurrentUser, setCurrentUser] = useState<ICurrentUser | null>(null)
    const [HotelsList, setHotelsList] = useState<IHotel[]>([])
    const [Hotel, setHotel] = useState<IHotel | null>(null)
    const [SuggestedHotels, setSuggestedHotels] = useState<IHotel[]>([])
    const [BedroomsList, setBedroomsList] = useState<IBedroom[]>([])
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const navigate = useNavigate();

    const login = async (formData: TLogin) => {

        try{
            const { data } = await api.post('/login', formData);
            localStorage.setItem('user@TOKEN', data.access);
            const decoded = jwtDecode<ICurrentUser>(data.access);
            localStorage.setItem('user@INFO', JSON.stringify(decoded));
            toast.success('Login efetuado com sucesso!');
            setCurrentUser(decoded)

            if (decoded.role === 'hospede'){
                navigate('/')
            } else{
                navigate('/adm')
            }

        }catch{
            toast.error('Email invalido');
        }
    }
    const logOut = () => {
        localStorage.removeItem('user@TOKEN');
        localStorage.removeItem('user@ID');
        setCurrentUser(null)
        toast.success('Logout realizado')
        navigate('/')
    }
    const createUser = async (formData: TGuestRegisterSchema) => {
        const {confirmPassword, ...newFormData} = formData

        try{
            await api.post('/users', newFormData);
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
            await api.put(`/users/${user_id}`, formData,
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
            await api.delete(`/users/${user_id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Conta excluída com sucesso!')
        }catch(err){
            toast.error(`${err}`)
        }
    }
    const getAllHotels = async () => {
        const { data } = await api.get<IHotel[]>('/hotels');
        setHotelsList(data)
    }
    const getHotelById = async (hotel_id: string) => {
        try{
            const { data } = await api.get<IHotel | null>(`/hotels/${hotel_id}`);
            setHotel(data)
            setSuggestedHotels(HotelsList.filter(element => element.id !== hotel_id))

        }catch(err){
            toast.error(`${err}`)
        }
    }

    const getAllBedrooms = async () => {
        const { data } = await api.get<IBedroom[]>('/bedrooms');
        setBedroomsList(data)
    }

    //Reservation Requests
    const createReservation = async (formData: TReservationSchema) => {
        try {
            const { data } = await api.post('/bookings', formData,{
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
            const { data } = await api.patch(`/bookings/${booking_id}`, formData,{
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


    useEffect(() => {
        try{
            getAllHotels();
            getAllBedrooms();
        }catch{
            toast.error('Não foi possível buscar os hoteis')
        }
        
        let user = localStorage.getItem('user@INFO');
        if(user){
            setCurrentUser(JSON.parse(user))
            navigate('/')
        }
        
    }, [])
    
    return(
        <GlobalContext.Provider value={{
            login,
            logOut,
            createUser,
            updateUser,
            deleteUser,
            getAllHotels,
            getHotelById,
            CurrentUser,
            HotelsList,
            setHotelsList,
            Hotel,
            setHotel,
            SuggestedHotels,
            setSuggestedHotels,
            BedroomsList,
            setBedroomsList,
            getAllBedrooms,
            createReservation,
            updateReservation,
            isLoginModalOpen,
            setIsLoginModalOpen

        }}>
            {children}
        </GlobalContext.Provider>
    )
}