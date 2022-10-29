import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const initialState = {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: exampleTasks }) => {
            state.tasks = exampleTasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

const selectTasksSlice = state => state.tasks;

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    setTasks,
    editTask
} = tasksSlice.actions;

export const selectTasks = state => selectTasksSlice(state).tasks;
export const selectHideDone = state => selectTasksSlice(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksListEmpty = state => selectTasks(state).length === 0;
export const selectIsLoading = state => selectTasksSlice(state).loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;