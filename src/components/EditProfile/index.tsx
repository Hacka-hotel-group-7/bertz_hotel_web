import { useContext } from "react"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext"
import { useForm } from "react-hook-form"
import { TEditUserSchema } from "./EditProfileSchema"
import { InputComponent, SelectComponent } from "../Input"
import { IUser } from "../../providers/GlobalContext/@types"

interface IEditProfileProps {
    user: IUser
}
export const EditProfile = ( {user}: IEditProfileProps) => {
    const { updateUser } = useContext(GlobalContext)
    const { register, handleSubmit } = useForm<TEditUserSchema>()
    const submit = (formData: TEditUserSchema, ) => {
        updateUser(formData, user.id)
    }
    
    return (
        <div key={user.id}>
            <form onSubmit={handleSubmit(submit)}>
                <InputComponent type="text" placeholder={user.name? user.name : 'Nome'} defaultValue={user.name}{...register('name')} />
                <InputComponent type="email" placeholder={user.username? user.username : 'Email'} defaultValue={user.username}  {...register('username')} />
                <InputComponent type="text" placeholder={user.country_code? user.country_code : 'Código do País'} defaultValue={user.country_code}{...register('country_code')} />
                <InputComponent type="text" placeholder={user.contact_info? user.contact_info : 'Telefone'} defaultValue={user.contact_info} {...register('contact_info')} />
                <SelectComponent defaultValue={user.document_type} {...register('document_type')}>
                    <option value="" disabled>Selecione um tipo de documento</option>
                    <option value="CPF">CPF</option>
                    <option value="RG">RG</option>
                    <option value="PASSAPORTE">Passaporte</option>
                    <option value="OUTRO">Outro</option>
                </SelectComponent>
                <InputComponent type="text" placeholder={user.document_number? user.document_number : 'Número do documento'} defaultValue={user.document_number} {...register('document_number')} />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    )
}