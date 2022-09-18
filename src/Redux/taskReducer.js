import { createSlice } from "@reduxjs/toolkit";
import uuid from 'uuid-random'

const initialState = {
    dateTarget: '',
    messageTarget: '',
    isSubmit: false,
    taskOrder: [
        {
            _id: uuid(), 
            date: 'Today',
            task: 'Example task',
        },
    ],
};

export const taskReducer = createSlice({
    name: 'taskTarget',
    initialState,
    reducers: {
        addDate: (state, action) => {
            state.dateTarget = action.payload
        },
        addMessage: (state, action) => {
            state.messageTarget = action.payload
        },
        addTask: (state) => {
            state.taskOrder.unshift(
                {_id: uuid(), date: state.dateTarget, task: state.messageTarget}
            ) 
        },
        setSubmit_on: (state) => {
            state.isSubmit = true
        },
        setSubmit_off: (state) => {
            state.isSubmit = false
        },
    },
});

export const { addDate, addMessage, addTask, setSubmit_on, setSubmit_off } = taskReducer.actions;
export default taskReducer.reducer;