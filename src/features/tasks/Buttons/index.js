import { HeaderSection, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectIsEveryTaskDone,
    selectAreTasksListEmpty,
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksListEmpty = useSelector(selectAreTasksListEmpty);
    const dispatch = useDispatch();

    return (
        <HeaderSection>
            {!areTasksListEmpty && (
                <>
                    <Button
                        onClick={() => { dispatch(toggleHideDone()) }}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => { dispatch(setAllDone()) }}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )
            };
        </HeaderSection >
    );
};

export default Buttons;

