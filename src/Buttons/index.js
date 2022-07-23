import "./style.css";


const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="section__headerButtons">
            <button className="section__headerButton">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button >
            <button
                className="section__headerButton"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    );
};


export default Buttons;

