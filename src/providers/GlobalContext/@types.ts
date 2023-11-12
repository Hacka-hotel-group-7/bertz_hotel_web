import { TLogin } from "../../components/Login/LoginSchema";
import { TGuestRegisterSchema } from "../../components/Register/RegisterSchema";

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
    id: string
    status: number
    city: string
    address: string
    phone: string
    description: string
    bedrooms: IBedroom[]
    promotion: IPromotion[]
    images: IImage[]
    services: IService[]
}

export interface IBedroom {
    id: string
    status: number
    room_type: string
    bed_number: number
    price: number
    hotel_id: string
}

export interface IPromotion{
    id: string
    name: string
    discount_amount: number
}

export interface IImage {
    id: string
    image: string
}

export interface IService {
    id: string
    service: string
}

export interface IGlobalContext {
    login: (formData: TLogin) => void
    logOut: () => void
    getAllHotels: () => void
    createUser: (formData: TGuestRegisterSchema) => void
    getHotelById: (hotel_id: string) => void
    CurrentUser: ICurrentUser | null   
    HotelsList: IHotel[]    
    Hotel: IHotel | null
    setHotel: React.Dispatch<React.SetStateAction<IHotel | null>>
    SuggestedHotels: IHotel[]
    setSuggestedHotels: React.Dispatch<React.SetStateAction<IHotel[]>>
}