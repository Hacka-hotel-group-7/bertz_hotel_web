import { useContext } from "react";
import { StyledH3, StyledP, StyledH1 } from "../../styles/typography";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { Link } from "react-router-dom";
import { HotelStyled, RoomsStyled } from "./styles";

export const IconsHotel = () => {
  const { HotelsList } = useContext(GlobalContext);

  return (
    <HotelStyled>
      {HotelsList.length > 0 ? (
        HotelsList.map((object) => (
          <li key={object.id}>
            <img src={object.images[0].image} alt={object.description} />
            <div>
              <StyledH3 fontWeight="normal">{object.description}</StyledH3>

              <StyledP fontWeight="normal" fontSize="small">
                {object.address}
              </StyledP>
            </div>
            <Link to={`/hotel/${object.id}`} className="home__link">
              Veja mais
            </Link>
          </li>
        ))
      ) : (
        <StyledH1 fontWeight="bold">Carregando...</StyledH1>
      )}
    </HotelStyled>
  );
};

export const IconsRoom = () => {
  const { BedroomsList } = useContext(GlobalContext);

  return (
    <RoomsStyled>
      {BedroomsList.length > 0 ? (
        BedroomsList.map((object) => (
          <li key={object.id}>
            <img src={object.image} alt={object.room_type} />
            <div>
              <StyledH3 fontWeight="normal">{object.room_type}</StyledH3>
              <StyledP fontWeight="normal" fontSize="medium">
                {object.bed_number} camas
              </StyledP>
              <StyledP fontWeight="normal" fontSize="medium">
                R${object.price},OO por noite
              </StyledP>
            </div>
            <Link to={`/booking/${object.id}`} className="room__link">
              Faça sua Reserva
            </Link>
          </li>
        ))
      ) : (
        <StyledH1 fontWeight="bold">Carregando...</StyledH1>
      )}
    </RoomsStyled>
  );
};
