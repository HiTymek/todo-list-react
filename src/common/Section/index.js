import { StyledSection, HeaderContainer, Header } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <StyledSection>
        <HeaderContainer>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </HeaderContainer>
        {body}
    </StyledSection>
);

export default Section;