import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { TLogin, LoginSchema} from "./LoginSchema";
import { StyledH3, StyledP } from "../../styles/typography"
import { InputComponent } from "../Input";
export const LoginModal = () => {
    const { login, setIsLoginModalOpen } = useContext(GlobalContext)
    // const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({
        resolver: zodResolver(LoginSchema)
    })

    const submit = (formData: TLogin) => {
        login(formData)
        // navigate('/')
        setIsLoginModalOpen(false)
    }

    return(
        <>
            <div>
                <StyledH3 fontWeight="bold">Login</StyledH3>

                <form onSubmit={handleSubmit(submit)}>
                    <InputComponent type="email" placeholder="Digite seu email" {...register('username')} />
                    {errors.username?.message}
                    <InputComponent type="password" placeholder="Digite sua senha" {...register('password')}/>
                    {errors.password?.message}
                    
                    <button type="submit">Entrar</button>
                </form>
                <StyledP fontSize="small" fontWeight="normal">Não possui uma conta?</StyledP>
                <button /*onClick={() => navigate('/register')}*/>Faça seu cadastro</button>
                
                
            </div>
        </>
    )
}