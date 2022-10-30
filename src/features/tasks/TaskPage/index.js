import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { ContentContainer } from "../../author/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Navigation from "../../../common/Navigation";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Navigation />
            <Container>
                <Header title="Szczegóły zadania" />
                <Section
                    title={task ? task.content : "Ups coś poszło nie tak 😥"}
                    body={
                        task ?
                            <ContentContainer>
                                <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                            </ContentContainer>
                            :
                            <ContentContainer>
                                <strong>Nie znaleziono zadania o takim ID</strong>
                            </ContentContainer>
                    }
                />
            </Container>
        </>
    );
};

export default TaskPage;