import { useContext } from "react"
import { GlobalContext } from "../../../providers/GlobalContext/GlobalContext"
import { IReview } from "../../../providers/GlobalContext/@types"
import { StyledH3 } from "../../../styles/typography"
import { useForm } from "react-hook-form"
import { ButtonStyled } from "../../Button/Style"
import { InputComponent } from "../../Input"
import { TReviewSchema } from "./ReviewSchema"


interface IReviewsProps {
    review: IReview
}
export const EditReview = ({review}: IReviewsProps) => {
    const { isReviewModalOpen, setIsReviewModalOpen} = useContext(GlobalContext);
    const {register, handleSubmit} = useForm<TReviewSchema>()
    const {updateReview, deleteReview} = useContext(GlobalContext)

    const submit = (formData: TReviewSchema) => {
        updateReview(formData, review.id)
        setIsReviewModalOpen(!isReviewModalOpen)
    }

    return (
        <div key={review.id}>
            <StyledH3 fontWeight="semibold">Editar avaliação</StyledH3>
            <form onSubmit={handleSubmit(submit)} >
                <InputComponent type='number'
                    placeholder={review.classification.toString()}
                    defaultValue={review.classification}
                    max={5}
                    {...register('classification')}
                    />
                <InputComponent type="text"
                    placeholder={review.comments}
                    defaultValue={review.comments}
                    {...register('comments')}/>
                
                <ButtonStyled type="submit">Editar</ButtonStyled>
            </form>

            <ButtonStyled onClick={() =>{
                deleteReview(review.id)
                setIsReviewModalOpen(!isReviewModalOpen)
            }}>Excluir</ButtonStyled>

            <ButtonStyled onClick={() => setIsReviewModalOpen(!isReviewModalOpen)}>Cancelar</ButtonStyled>
        </div>
    )
}

interface ICreateReviewProps {
    hotelId: string
}

export const CreateReview = ({hotelId}: ICreateReviewProps) => {
    const { isCreateReviewModalOpen, setIsCreateReviewModalOpen} = useContext(GlobalContext);

    const {register, handleSubmit} = useForm<TReviewSchema>()
    const {createReview} = useContext(GlobalContext)

    const submit = (formData: TReviewSchema) => {
        createReview(formData, hotelId)
        setIsCreateReviewModalOpen(!isCreateReviewModalOpen)
    }
    return (
        <div key={hotelId}>
             <StyledH3 fontWeight="semibold">Fazer Avaliação</StyledH3>
            <form onSubmit={handleSubmit(submit)} >
                <InputComponent type='number'
                    placeholder="Classificação"
                    max={5}
                    {...register('classification')}
                    />
                <InputComponent type="text"
                    placeholder="Comentários"
                    {...register('comments')}/>
    
                <ButtonStyled type="submit">Comentar</ButtonStyled>
            </form>
            <ButtonStyled onClick={() => setIsCreateReviewModalOpen(!isCreateReviewModalOpen)}>Cancelar</ButtonStyled>
            
        </div>
    )
}