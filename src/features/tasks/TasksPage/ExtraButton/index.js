import { useDispatch, useSelector } from "react-redux";
import { StyledHeaderButton } from "../StyledHeaderButton/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

const ExtraButton = () => {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    return (
        <StyledHeaderButton
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={isLoading}
        >
            {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </StyledHeaderButton>
    );
};

export default ExtraButton;