import { TLogin } from "../../components/Login/LoginSchema";
import { TGuestRegisterSchema } from "../../components/Register/RegisterSchema";
import { TReservationSchema } from "../../components/Reservations/ReservationSchema";

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
    reviews: IReview[]
}

export interface IUser {
    id: string
    name: string
    username: string
    country_code: string
    contact_info: string
    document_type: string
    document_number: string
    role: string
    is_superuser: boolean
    reviews: IReview[]
    reservations: IReservation[]
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

export interface IReservation{
    id: string
    checkin_date: string
    checkout_date: string
    status: string
    paid: boolean
    payment_method: string
    total: number
    guest: IUser
    bedroom: IBedroom
}

export interface IReview{
    id: string
    classification: number
    comments: string
}

export interface IGlobalContext {
    login: (formData: TLogin) => void
    logOut: () => void
    getAllHotels: () => void
    createUser: (formData: TGuestRegisterSchema) => void
    updateUser: (formData: TGuestRegisterSchema, user_id: string) => void
    deleteUser: (user_id: string) => void
    getHotelById: (hotel_id: string) => void
    CurrentUser: ICurrentUser | null   
    HotelsList: IHotel[]
    setHotelsList: React.Dispatch<React.SetStateAction<IHotel[]>>    
    Hotel: IHotel | null
    setHotel: React.Dispatch<React.SetStateAction<IHotel | null>>
    SuggestedHotels: IHotel[]
    setSuggestedHotels: React.Dispatch<React.SetStateAction<IHotel[]>>
    BedroomsList: IBedroom[]
    setBedroomsList: React.Dispatch<React.SetStateAction<IBedroom[]>>
    getAllBedrooms: () => void
    createReservation: (formData: TReservationSchema) => void
    updateReservation: (formData: string, booking_id: string) => void
}