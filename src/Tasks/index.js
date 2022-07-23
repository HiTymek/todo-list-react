import "./style.css";

const Tasks = (props) => (
    <ul className="tasksList">
        {props.tasks.map(task => (
            <li className={`tasksList__item ${props.hideDoneTasks && task.done ? "tasksList__item--hide" : ""}`}>
                <button className="tasksList__button">
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