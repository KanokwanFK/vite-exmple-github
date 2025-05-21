import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface FromState {
    name: string,
    gmail: string,
    passwrod: string,
}

const initialState : FromState =({
    name: "",
    gmail: "",
    passwrod: "",
})

const FromSlice = createSlice ({
    name: 'form',
    initialState: {},
    reducers: {
        updateForm(state , Action: PayloadAction<Partial<FromState>>) {
            Object.assign(state, Action.payload);
        },
        resetForm() {
            return initialState;
        },
    },

});

export const { updateForm , resetForm } = FromSlice.actions;
export default FromSlice;