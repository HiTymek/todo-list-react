import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 25px;
    margin: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    padding: 20px 0 20px 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.alto};

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.teal};

    :hover{
        filter: brightness(120%);
    }
`;

export const Button = styled.button`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    width: 40px;
    height: 40px;
    justify-self: center;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    text-align: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.crusoe};
        transition-duration: 0.5s;
    }

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.red};
        margin-left: 15px;
        margin-right: 0;

        &:hover {
            background-color: ${({ theme }) => theme.colors.guardsmanRed};
            transition-duration: 0.5s;
        }
    `};
`;