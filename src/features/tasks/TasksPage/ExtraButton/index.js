import { useDispatch } from "react-redux";
import { StyledHeaderButton } from "../StyledHeaderButton/styled";
import { fetchExampleTasks } from "../../tasksSlice";

const ExtraButton = () => {
    const dispatch = useDispatch();

    return (
        <StyledHeaderButton
            onClick={() => dispatch(fetchExampleTasks())}
        >
            Pobierz przykładowe zadania
        </StyledHeaderButton>
    );
};

export default ExtraButton;