import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.alto};
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    letter-spacing: 1px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    border: none;

    &:hover{
        background-color: ${({ theme }) => theme.colors.sherpaBlue};
        transform: scale(1.05);
        transition-duration: 0.5s;
        cursor: pointer;
    }
`;