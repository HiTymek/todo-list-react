import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { ContentContainer } from "../../author/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={
                    <ContentContainer>
                        <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                    </ContentContainer>
                }
            />
        </Container>
    );
};

export default TaskPage;