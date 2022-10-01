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
        };
    };

    const inputRef = useRef(null);

    const setFocus = () => {
        inputRef.current.focus();
    };

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
            <Button onClick={setFocus}>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;