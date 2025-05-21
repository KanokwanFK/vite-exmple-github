import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PokemonService = createApi({
    reducerPath:"PokemonService",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://pokeapi.co/api/v2"
    }),
    endpoints: (build) => ({//การเอาไปใช้
        getAllPokemon: build.query({
            query: () =>{
                return "";
            }
        })
    }) 
});

export const {useGetAllPokemonQuery} = PokemonService;

export default PokemonService;