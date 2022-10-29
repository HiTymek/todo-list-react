import styled from "styled-components";

export const HeaderSection = styled.div`
    display: flex;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column
    }
`;


