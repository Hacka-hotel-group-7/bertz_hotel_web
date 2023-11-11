import { TLogin } from "../../pages/Login/LoginSchema";

export interface IGlobalProviderProps {
    children: React.ReactNode
}

export interface ICurrentUser {
    token_type: string
    exp: number
    iat: number
    jti: string
    user_id: string
    role: string
}

export interface IHotel {
    
}


export interface IGlobalContext {
    login: (formData: TLogin) => void
    logOut: () => void
    getAllHotels: () => void
    createUser: () => void
    getHotelById: () => void
    CurrentUser: ICurrentUser | null
}