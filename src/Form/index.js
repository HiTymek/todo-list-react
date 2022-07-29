import "./style.css";
import { useState } from 'react';


const Form = ({ addNewTask }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    const [newTaskContent, setNewTaskContent] = useState("");

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                type="text"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;