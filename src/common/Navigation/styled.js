import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.teal};
    padding: 2px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    &.active{
        font-weight: 900;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    padding-left: 0;
    justify-content: center;
    list-style: none;
`;

export const StyledListItem = styled.li`
    padding: 5px 20px 5px 20px;
`;