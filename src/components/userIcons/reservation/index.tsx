import { IReservation } from "../../../providers/GlobalContext/@types";
import { StyledP } from "../../../styles/typography";

interface IReservationProps{
    reservation: IReservation
}

export const ReservationsIcons = ({reservation}: IReservationProps) => {

    return(
        <li key={reservation.id}>
            <StyledP fontWeight="bold" fontSize="medium">Quarto: {reservation.bedroom.room_type}</StyledP>
            <img src={reservation.bedroom.image} alt="Imagem do quarto" />
            <p>Check-in: {reservation.checkin_date}</p>
            <p>Check-out: {reservation.checkout_date ? reservation.checkout_date : "Não informado"}</p>
            <p>Status: {reservation.status}</p>
            <p>Pago: {reservation.paid ? "Sim" : "Não"}</p>
            <p>Forma de pagamento: {reservation.payment_method ? reservation.payment_method : "Não informado"}</p>
            <p>Total: {reservation.total}</p>
        </li>
    )
    
}