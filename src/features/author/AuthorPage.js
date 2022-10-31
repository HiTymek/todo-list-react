import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { ContentContainer } from "./styled";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Tymoteusz Wójcik"
            body={
                <ContentContainer>
                    <p>
                        <strong>Moją największą pasją są motocykle 😍 </strong>
                        Od bardzo dawna marzę aby spełnić swoje największe marzenie i kupić swój pierwszy motocykl!
                        Uwielbiam oglądać wyścigi motocyklowe takie jak MOTO GP albo TT. Interesuje się każdymi nowinkami jeśli chodzi o nie.
                        W przyszłym roku mam nadzieję, że skończę robić prawo jazdy. I kupię swoją pierwszą maszynę 🥰.
                    </p>
                    <p>
                        Także do zobaczenia w przyszłym roku na drogach. <strong>Lewa w górę ✋🏻.</strong>
                    </p>
                </ContentContainer>
            }
        />
    </Container>
);

export default AuthorPage;