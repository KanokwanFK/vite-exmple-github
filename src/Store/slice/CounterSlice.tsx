import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0,
    },
    reducers: {
        increment: (initialState) => {
            initialState.value += 1;
        },  
        decrement: (initialState) => {
            initialState.value -= 1;
        },  
        increseByAmount: (initialState,Action: PayloadAction<number>)=>{
            initialState.value += Action.payload;
        }
    },
});

export const {increment,decrement,increseByAmount} = counterSlice.actions;
export default counterSlice;