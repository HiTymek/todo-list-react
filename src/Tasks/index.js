import "./style.css";

const Tasks = ({ tasks, hideDone, }) => (
    <ul className="tasksList">
        {tasks.map((task) => (
            <li key={task.id} className={`tasksList__item ${hideDone && task.done ? "tasksList__item--hide" : ""}`}>
                <button
                    className="tasksList__button"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "tasksList__item--done" : ""}>
                    {task.content}
                </span>
                <button className="tasksList__button tasksList__button--red">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;