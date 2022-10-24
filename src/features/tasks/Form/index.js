import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from 'react';
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        dispatch(addTask({
            content: newTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                type="text"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;