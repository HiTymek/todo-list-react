import styled from "styled-components";

export const HeaderSection = styled.div`
    display: flex;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column
    }
`;

export const Button = styled.button`
    color: teal;
    border: none;
    font-size: 18px;
    background-color: transparent;
    padding: 20px;

    &:hover{
        color: hsl(180, 100%, 35%);
        transition-duration: 0.5s;
        cursor: pointer;
    }

    &:disabled{
        color: ${({ theme }) => theme.colors.dustyGray};
        cursor: auto;
    }
`;

