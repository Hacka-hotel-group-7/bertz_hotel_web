import { useContext } from "react";
import { StyledH3, StyledP, StyledH1 } from "../../styles/typography"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";


export const IconsHotel =()=> {

    const { HotelsList } = useContext(GlobalContext);
   
    return(
        <ul>
            {HotelsList.length > 0 ? (
                HotelsList.map((object) => (
                    <li key={object.id}>

                    <img src = {object.images[0].image} alt={object.description} />
                    <div>
                        <StyledH3 fontWeight="normal">
                            {object.description}
                        </StyledH3>

                        <StyledP fontWeight="normal"
                        fontSize="small">
                            {object.address}
                        </StyledP>
                    </div>
                    </li>
    
            )) ): ( 
                <StyledH1 fontWeight="bold">
                    Carregando...
                </StyledH1>
            )
                
            }
        </ul>
    )
}

export const IconsRoom =()=> {

    const { BedroomsList } = useContext(GlobalContext);
    console.log(BedroomsList)


    return(
        <ul>{BedroomsList.length > 0 ? (
             BedroomsList.map((object) => (
                <li key={object.id}>
                    <img src = {object.image} alt={object.room_type} />
                    <div>
                        <StyledH3 fontWeight="normal">
                            {object.room_type}
                        </StyledH3>
                        <StyledP fontWeight="normal" fontSize="medium">{object.bed_number} camas</StyledP>
                        <StyledP fontWeight="normal" fontSize="medium">R${object.price},OO por noite</StyledP>
                    </div>
                </li>
            ))
        ): (
            <StyledH1 fontWeight="bold">Carregando...</StyledH1>
        )}


        </ul>
    )
}