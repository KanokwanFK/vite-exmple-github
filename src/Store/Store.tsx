import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/CounterSlice"
import PokemonService from "../Service/PokemonService";


const Store  = configureStore({
    reducer:{
        // [counterSlice.name]: 
        [counterSlice.name]: counterSlice.reducer ,
        [PokemonService.reducerPath]: PokemonService.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(PokemonService.middleware)
});

export default Store;