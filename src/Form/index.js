import { useState, useRef, useEffect } from 'react';
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        } else {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
            inputRef.current.focus();
        };
    };

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const [newTaskContent, setNewTaskContent] = useState("");

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
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