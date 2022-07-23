import Form from "./Form";
const tasks = [
  {
    content: "przeniesc liste do reacta",
    id: 1,
  },
  {
    content: "zjeść obiad",
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
          <div className="section__headerButtons"></div>
        </div>
        <ul className="tasksList"></ul>
      </section>
    </main>
  );
}

export default App;
