// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     tasks: [],
//     hideDone: false,
// };

// const tasksSlice = createSlice({
//     name: "tasks",
//     initialState,
//     reducers: {
//         addTask: (state, action) => {
//             state.tasks.push(action.payload);
//         },
//         toggleHideDone: state => {
//             state.hideDone = !state.hideDone
//         },
//     },
// });

// export const { addTask, toggleHideDone } = tasksSlice.actions;
// export const selectTasks = state => state.tasks;
// export default tasksSlice.reducer;

// import { configureStore } from "@reduxjs/toolkit";
// import tasksReducer from "./features/tasks/tasksSlice";

// export default configureStore({
//     reducer: {
//         tasks: tasksReducer,
//     },
// });


// dispatch(addTask(
//     {
//         content: newTaskContent,
//         done: false,
//         id: nanoid(),
//     }
// ));


// const dispatch = useDispatch();