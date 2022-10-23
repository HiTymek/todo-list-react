import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
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
    },
});

const selectTasksSlice = state => state.tasks;

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => selectTasksSlice(state).tasks;
export const selectHideDone = state => selectTasksSlice(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksListEmpty = state => selectTasks(state).length === 0;
export default tasksSlice.reducer;