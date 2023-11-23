import { DeepPartial } from "react-hook-form"
import { IHotel, IBedroom, IPromotion, IImage, IService, IReservation, IUser } from "../../providers/GlobalContext/@types"

export interface IAdmProviderProps {
    children: React.ReactNode
}

export type THotelPartial = DeepPartial<IHotel>
export type TBedroomPartial = DeepPartial<IBedroom>
export type TPromotionPartial = DeepPartial<IPromotion>
export type TImagePartial = DeepPartial<IImage>
export type TServicePartial = DeepPartial<IService>

export interface IAdmContext{
    createHotel: (formData: THotelPartial) => void
    updateHotel: (formData: THotelPartial, hotel_id: string) => void
    deleteHotel: (hotel_id: string) => void
    isEditHotelOpen: boolean
    setIsEditHotelOpen: React.Dispatch<React.SetStateAction<boolean>>
    createRoom: (formData: TBedroomPartial, hotel_id: string) => void
    updateRoom: (formData: TBedroomPartial, room_id: string, hotel_id: string) => void
    isEditRoomOpen: boolean
    setIsEditRoomOpen: React.Dispatch<React.SetStateAction<boolean>>
    createPromotion: (formData: TPromotionPartial, hotel_id: string) => void
    getPromotion: () => void
    deletePromotion: (promotion_id: string) => void
    getAllReservations: () => void
    AllReservations: IReservation[]
    setAllReservations: React.Dispatch<React.SetStateAction<IReservation[]>>
    getAllUsers: () => void
    UserList: IUser[]
    setUserList: React.Dispatch<React.SetStateAction<IUser[]>>
    createService: (formData: string) => void
    deleteService: (service_id: string) => void
    PromotionsList: IPromotion[]
    setPromotionsList: React.Dispatch<React.SetStateAction<IPromotion[]>>
}