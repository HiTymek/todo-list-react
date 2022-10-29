import { HeaderSection } from "./styled";
import { StyledHeaderButton } from "../StyledHeaderButton/styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectIsEveryTaskDone,
    selectAreTasksListEmpty,
} from "../../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksListEmpty = useSelector(selectAreTasksListEmpty);
    const dispatch = useDispatch();

    return (
        <HeaderSection>
            {!areTasksListEmpty && (
                <>
                    <StyledHeaderButton
                        onClick={() => { dispatch(toggleHideDone()) }}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledHeaderButton>
                    <StyledHeaderButton
                        disabled={isEveryTaskDone}
                        onClick={() => { dispatch(setAllDone()) }}
                    >
                        Ukończ wszystkie
                    </StyledHeaderButton>
                </>
            )
            }
        </HeaderSection >
    );
};

export default Buttons;

