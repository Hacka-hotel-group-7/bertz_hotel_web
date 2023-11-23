import { createContext, useContext, useState } from "react";
import { IAdmContext, IAdmProviderProps, TBedroomPartial, THotelPartial, TPromotionPartial } from "./@types";
import { IHotel, IBedroom, IPromotion, IUser, IReservation, IService } from "../GlobalContext/@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useEffect } from "react";

export const AdmContext = createContext({} as IAdmContext);

export const AdmProvider = ({ children }: IAdmProviderProps) => {
    const token = localStorage.getItem('user@TOKEN')
    const [PromotionsList, setPromotionsList] = useState<IPromotion[]>([])
    const [AllReservations, setAllReservations] = useState<IReservation[]>([])
    const [UserList, setUserList] = useState<IUser[]>([])
    const [isEditHotelOpen, setIsEditHotelOpen] = useState(false)
    const [isEditRoomOpen, setIsEditRoomOpen] = useState(false)

    const { HotelsList, setHotelsList } = useContext(GlobalContext)
    //Hotel Requests
    const createHotel = async (formData: THotelPartial) => {
        try{
            const { data } = await api.post<IHotel>('/hotels', formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success('Hotel criado com sucesso!')
            setHotelsList([...HotelsList, data])
        }catch(err){
            toast.error('Não foi possível criar o hotel!')
        }
    }

    const updateHotel = async (formData: THotelPartial, hotel_id: string) => {
        try{
            const { data } = await api.put<IHotel>(`/hotels/${hotel_id}`, formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const updatedList = HotelsList.filter((element) => element.id !== hotel_id)

            setHotelsList([...updatedList, data])
            toast.success('Hotel atualizado com sucesso!')

            HotelsList.map((hotel) => {
                if(hotel.id == hotel_id){
                    return data
                }else{
                    return hotel
                }
             })

        }catch(err){
            toast.error('Não foi possível atualizar o hotel!')
        }finally{
            setIsEditHotelOpen(false)
        }        
    }

    const deleteHotel = async (hotel_id: string) => {
        try{
            await api.delete(`/hotels/${hotel_id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const updatedList = HotelsList.filter((element) => element.id !== hotel_id)
        
            setHotelsList(updatedList)

            toast.success('Hotel excluído com sucesso!')
        }catch(err){
            toast.error('Não foi possível excluir o hotel!')
        }
        
    }

    //Room Requests
    const createRoom = async (formData: TBedroomPartial, hotel_id: string) => {
        try{
            const { data } = await api.post<IBedroom>(`/rooms/${hotel_id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success('Quarto criado com sucesso!')

        }catch(err){
            toast.error('Não foi possível criar o quarto!')
        }
    }

    const updateRoom = async (formData: TBedroomPartial, room_id: string) => {
        try {
            const { data } = await api.patch<IBedroom>(`/rooms/${room_id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            toast.success('Quarto atualizado com sucesso!')
            setIsEditRoomOpen(false)
        } catch (error) {
            toast.error('Não foi possível atualizar o quarto!')
        }
    }

    //Promotion Requests
    const createPromotion = async (formData: TPromotionPartial) => {
        try {
            const { data } = await api.post<IPromotion>('/discounts', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
            const updatedList = [...PromotionsList, data]
            setPromotionsList(updatedList)

            toast.success('Promoção criada com sucesso!')
            
        } catch (error) {
            toast.error('Não foi possível criar a promoção!')
        }
    }

    const getPromotion = async () => {
        try {
            const { data } = await api.get<IPromotion[]>('/discounts', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setPromotionsList(data)
            
        } catch (error) {
            toast.error(`${error}`)
        }
        
    }

    const deletePromotion = async (promotion_id: string) => {
        try {
            await api.delete(`/discounts/${promotion_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            const updatedList = PromotionsList.filter((element) => element.id !== promotion_id)

            setPromotionsList(updatedList)

            toast.success('Promoção excluída com sucesso!')

        } catch (error) {
            console.log(error)
            toast.error('Não foi possível excluir a promocão!')
        }
        
    }

    //Reservation Requests
    const getAllReservations = async () => {
        try {
            const { data } = await api.get<IReservation[]>('/reservations', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setAllReservations(data)
        
        } catch (error) {
            toast.error(`${error}`)
        }

    }

    //User Requests
    const getAllUsers = async () => {
        try {
            const { data } = await api.get<IUser[]>('/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setUserList(data)
        } catch (error) {
            toast.error(`${error}`)
        }
    }

    //Services 
    const createService = async (formData: string) => {
        try {
            const { data } = await api.post<IService>('/services', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }catch(err){
            toast.error('Não foi possível criar o serviço!')
        }
    }

    const deleteService = async (service_id: string) => {
        try {
            await api.delete(`/services/${service_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success('Serviço excluído com sucesso!')
        } catch (error) {
            toast.error('Não foi possível excluir o serviço!')
        }
        
    }

    useEffect(() => {
        try {

            const getAllReservations = async () => {
                    const { data } = await api.get<IReservation[]>('/bookings', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setAllReservations(data)        
            }
            const getAllUsers = async () => {
                    const { data } = await api.get<IUser[]>('staff/', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setUserList(data)
            }
            const getPromotion = async () => {
                    const { data } = await api.get<IPromotion[]>('/discounts', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
        
                    setPromotionsList(data)
                
            }
            
            getAllReservations()
            getAllUsers()
            getPromotion()
        } catch (error) {
            toast.error(`${error}`)
        }
        
    },[])

    return(
        <AdmContext.Provider value={{
            createHotel,
            updateHotel,
            deleteHotel,
            isEditHotelOpen,
            setIsEditHotelOpen,
            createRoom,
            updateRoom,
            isEditRoomOpen,
            setIsEditRoomOpen,
            createPromotion,
            getPromotion,
            deletePromotion,
            getAllReservations,
            AllReservations,
            setAllReservations,
            getAllUsers,
            UserList,
            setUserList,
            createService,
            deleteService, 
            PromotionsList,
            setPromotionsList
        }}>
            {children}
        </AdmContext.Provider>
    )
}