import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHendler() {
    try {
        yield delay(1500);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield call(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export default function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};
