import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";


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
    <main className="container">
      <header className="header">
        <h1 className="header__title">Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;
