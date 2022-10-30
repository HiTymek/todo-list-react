import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { ContentContainer } from "../../author/styled";
import Search from "./Search";
import ExtraButton from "./ExtraButton";

const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ExtraButton />}
      />
      < Section
        title="Wyszukiwarka"
        body={
          < ContentContainer >
            <Search />
          </ContentContainer >
        }
      />
      < Section
        title="Lista zadań"
        body={< TaskList />}
        extraHeaderContent={< Buttons />}
      />
    </Container >
  );
};

export default TasksPage;
