import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllTasksDone }) => {
    return (
        <div className="section__headerButtons">
            {tasks.length > 0 && (
                <>
                    <button
                        className="section__headerButton"
                        onClick={toggleHideDone}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </button>
                    <button
                        className="section__headerButton"
                        disabled={tasks.every(({ done }) => done)}
                        onClick={markAllTasksDone}
                    >
                        Ukończ wszystkie
                    </button>
                </>
            )
            }
        </div >
    );
};

export default Buttons;

