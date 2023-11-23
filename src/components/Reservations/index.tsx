import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, TReservationSchema } from "./ReservationSchema";
import { useContext } from "react"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { StyledH1 } from "../../styles/typography";
import { InputComponent } from "../Input";
import { toast } from "react-toastify";

export const ReservationPage = () =>{
    const navigate = useNavigate()
    const { createReservation } = useContext(GlobalContext)

    const { register, handleSubmit, formState: { errors }} = useForm<TReservationSchema>({
        resolver: zodResolver(reservationSchema)
    })

    const submit = (formData: TReservationSchema) => {
        createReservation(formData)
    }
    return (
        <>
            <StyledH1 fontWeight="bold"> Faça sua reserva</StyledH1>
            <form onSubmit={handleSubmit(submit)}>
                <InputComponent type="date" placeholder="Data de Entrada" {...register("check_in")} />   
                {errors.check_in?.message} 

            </form>
        
        </>
    )
}