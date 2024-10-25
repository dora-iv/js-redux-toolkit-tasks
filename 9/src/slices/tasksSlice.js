import axios from "axios";

import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import routes from "../routes.js";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await axios.get(routes.tasksPath());
    return response.data.items;
});

// BEGIN (write your solution here)
export const createTask = createAsyncThunk("tasks/createTask", async (name) => {
    const response = await axios.post(routes.tasksPath(), {name});
    return response.data;
});

export const removeTask = createAsyncThunk("tasks/removeTask", async (id) => {
    await axios.delete(routes.taskPath(id));
    return id;
});

const tasksAdapter = createEntityAdapter();

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                tasksAdapter.setAll(state, action.payload);
            })
            .addCase(createTask.fulfilled, (state, action) => {
                tasksAdapter.addOne(state, action.payload);
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                tasksAdapter.removeOne(state, action.payload);
            });
    },
});

export const selectors = tasksAdapter.getSelectors((state) => state.tasks);


export default tasksSlice.reducer;
// END
