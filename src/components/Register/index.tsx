import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TGuestRegisterSchema, guestRegisterSchema } from "./RegisterSchema";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { StyledH1 } from "../../styles/typography";
import { InputComponent, SelectComponent } from "../Input";
import { RegisterStyled } from "./style";
import { ButtonStyled } from "../Button/Style";
export const RegisterForm = () => {
  const navigate = useNavigate();

  const { createUser } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TGuestRegisterSchema>({
    resolver: zodResolver(guestRegisterSchema),
  });

  const submit = (formData: TGuestRegisterSchema) => {
    createUser(formData);
  };

  return (
    <RegisterStyled>
      <StyledH1 fontWeight="extrabold">Cadastre-se</StyledH1>

      <form onSubmit={handleSubmit(submit)}>
        <InputComponent type="text" placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <InputComponent
          type="email"
          placeholder="Email"
          {...register("username")}
        />
        {errors.username?.message}
        <InputComponent
          type="text"
          placeholder="Código do País"
          {...register("country_code")}
        />
        {errors.country_code?.message}
        <InputComponent
          type="text"
          placeholder="Telefone"
          {...register("contact_info")}
        />
        {errors.contact_info?.message}
        <SelectComponent defaultValue={"CPF"} {...register("document_type")}>
          <option value="" disabled>
            Selecione um tipo de documento
          </option>
          <option value="CPF">CPF</option>
          <option value="RG">RG</option>
          <option value="PASSAPORTE">Passaporte</option>
          <option value="OUTRO">Outro</option>
        </SelectComponent>
        {errors.document_type?.message}
        <InputComponent
          type="number"
          placeholder="Número do documento"
          {...register("document_number")}
        />
        {errors.document_number?.message}
        <InputComponent
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password?.message}
        <InputComponent
          type="password"
          placeholder="Confirmar Senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message}
        <div>
          <ButtonStyled type="submit">Cadastrar</ButtonStyled>
        </div>
      </form>
    </RegisterStyled>
  );
};
