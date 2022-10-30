import { StyledNavigation, StyledNavLink, StyledList, StyledListItem } from "./styled";

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledList>
                <StyledListItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </StyledListItem>
            </StyledList>
        </StyledNavigation>
    );
};

export default Navigation;