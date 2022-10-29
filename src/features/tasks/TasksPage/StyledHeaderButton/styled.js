import styled from "styled-components";

export const StyledHeaderButton = styled.button`
    color: teal;
    border: none;
    font-size: 18px;
    background-color: transparent;
    padding: 10px;

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