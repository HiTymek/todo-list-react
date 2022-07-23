import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";



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
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>
      <section className="section">
        <div className="section__headerContainer">
          <h2 className="section__header">Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section>
    </main>
  );
}

export default App;
