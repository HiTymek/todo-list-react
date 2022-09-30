import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width:767px){
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid hsl(0, 0%, 85%);
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    letter-spacing: 1px;
    background-color: teal;
    color: white;
    border: none;

    &:hover{
        background-color: hsl(180, 100%, 15%);
        transform: scale(1.05);
        transition-duration: 0.5s;
        cursor: pointer;
    }
`;