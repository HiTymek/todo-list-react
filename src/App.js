import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  {
    content: "przeniesc liste do reacta",
    done: false,
    id: 1,
  },
  {
    content: "zjeść obiad",
    done: true,
    id: 2,
  },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
