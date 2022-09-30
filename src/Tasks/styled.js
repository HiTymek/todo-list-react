import styled, { css } from "styled-components";

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
    border-bottom: 2px solid hsl(0, 0%, 85%);

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    font-size: 17px;
    color: white;
    background-color: green;
    width: 40px;
    height: 40px;
    justify-self: center;
    border: none;
    cursor: pointer;
    margin-right: 15px;

    &:hover {
        background-color: hsl(120, 100%, 15%);
        transition-duration: 0.5s;
    }

    ${({ remove }) => remove && css`
        background-color: red;
        margin-left: 15px;
        margin-right: 0;

        &:hover {
            background-color: hsl(0, 100%, 40%);
            transition-duration: 0.5s;
        }
    `};
`;