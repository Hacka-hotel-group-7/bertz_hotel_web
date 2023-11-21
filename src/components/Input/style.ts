import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    max-width: 31.25rem;
    height: 2rem;
    border: .125rem solid var(--color-grey);
    border-radius: 3.125rem;
    background-color: var();
    padding-left: 1.25rem;

    ::placeholder{
        padding-left: 1.25rem;
        font-size: 1.3125rem;
    }

    :hover{
        border: .1875rem solid;
    }

    :focus{
        border: .1875rem solid;
    }
`

export const StyledSelect = styled.select`
    width: 100%;
    max-width: 31.25rem;
    height: 2rem;
    border: .125rem solid var(--color-grey);
    border-radius: 3.125rem;
    background-color: var();
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    ::placeholder{
        padding-left: 1.25rem;
        font-size: 1.3125rem;
    }

    :hover{
        border: .1875rem solid;
    }

    :focus{
        border: .1875rem solid;
    }
`
