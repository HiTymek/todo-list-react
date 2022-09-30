import { useState } from 'react';
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        } else {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        };
    };

    const [newTaskContent, setNewTaskContent] = useState("");

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                type="text"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;