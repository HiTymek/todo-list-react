import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHendler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        call(alert, "Coś poszło nie tak");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
};

export default function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};
