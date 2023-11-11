import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../../pages/Login/LoginSchema";
import { IGlobalContext, IGlobalProviderProps, ICurrentUser, IHotel } from "./@types";

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
    const [CurrentUser, setCurrentUser] = useState<ICurrentUser | null>(null)
    const [HotelsList, setHotelsList] = useState<IHotel[]>([])
    const [Hotel, setHotel] = useState<IHotel | null>(null)
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

    const createUser = () => {
    }
    const getAllHotels = async () => {
        const { data } = await api.get<IHotel[]>('/hotels');
        setHotelsList(data)
    }
    const getHotelById = () => {
    }

    useEffect(() => {
        try{
            getAllHotels();
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
            getAllHotels,
            getHotelById,
            CurrentUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}