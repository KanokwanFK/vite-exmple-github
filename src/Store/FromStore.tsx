import { configureStore } from "@reduxjs/toolkit";
import FromSlice from "./FromSlice";

const Fromstore = configureStore({
    reducer:{
        [FromSlice.name]: FromSlice.reducer,
    },
});

export type RootState = ReturnType<typeof Fromstore.getState>
export type AppDispatch = typeof Fromstore.dispatch;

export default Fromstore;