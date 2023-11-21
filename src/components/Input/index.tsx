import { ForwardedRef, forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { StyledInput, StyledSelect } from './style';


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    type: string;
}

export const InputComponent = forwardRef(({label,placeholder,type, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return(
        <>
            {label ? <label>{label}</label> : null}
            <StyledInput ref={ref} {...rest} placeholder={placeholder} type={type}/>
        </>
    )
})


export const SelectComponent = forwardRef(({ ...rest}: SelectHTMLAttributes<HTMLSelectElement>, ref: ForwardedRef<HTMLSelectElement>) => {
    return(
            <StyledSelect ref={ref} {...rest}/>
    )
})