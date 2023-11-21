import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TGuestRegisterSchema, guestRegisterSchema } from "./RegisterSchema";
import { useContext } from 'react';
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { StyledH1 } from "../../styles/typography";
import { InputComponent, SelectComponent } from "../Input";
export const ResgisterPage = () => {
    // const navigate = useNavigate();

    const { createUser } = useContext(GlobalContext)
    const { register, handleSubmit, formState: { errors } } = useForm<TGuestRegisterSchema>({
        resolver: zodResolver(guestRegisterSchema)
    })

    const submit = (formData: TGuestRegisterSchema) => {
        createUser(formData)
        // navigate('/')
    }

    return(
        <>
            <StyledH1 fontWeight="extrabold">Cadastre-se</StyledH1>
            
            <form onSubmit={handleSubmit(submit)}>
                <InputComponent
                    type="text"
                    placeholder="Nome"
                    {...register('name')}
                />
                {errors.name?.message}
                <InputComponent
                    type="email"
                    placeholder="Email"
                    {...register('username')}
                />
                {errors.username?.message}
                <InputComponent
                    type="number"
                    max={4}
                    placeholder="Código do País"
                    {...register('country_code')}
                />
                <InputComponent
                    type="number"
                    placeholder="Telefone"
                    {...register('contact_info')}
                />
                {errors.contact_info?.message}
                <SelectComponent {...register('document_type')}>
                    <option value="" disabled selected>Selecione um setor</option>
                    <option value="CPF">CPF</option>
                    <option value="RG">RG</option>
                    <option value="PASSAPORTE">Passaporte</option>
                    <option value="OUTRO">Outro</option>
                </SelectComponent>
                <InputComponent
                    type="password"
                    placeholder="Senha"
                    {...register('password')}
                />
                <InputComponent
                    type="password"
                    placeholder="Confirmar Senha"
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword?.message}
                <button type="submit">Cadastrar</button>
            </form>                 
           
        </>
    )
}