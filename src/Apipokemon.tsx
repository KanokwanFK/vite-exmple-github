import { useEffect, useState } from "react"
import axios, {AxiosResponse} from "axios"
import { useGetAllPokemonQuery } from "./Service/PokemonService"
//import { data } from "react-router"

const Apipokemon = () =>{
    const api = "https://pokeapi.co/api/v2/pokemon?limit=256&offset=20"

    type Itype = {
            results: {
                name:string;
            }[];
    }

    useEffect(()=>{
        fnHead(),
        fnaxios()
    },[])

    const [items, setItems] = useState<Itype>(); //เป็น2ตัวเพราะช่วยให้ดูตัวแปรง่ายกว่าการที่เราสร้างทีละตัวแปร {} เป็นการดึงออกมาดูจากก้อน
    const [isLoading] = useState<Itype>();
    //const {data} = useGetAllPokemonQuery(null);



    const fnHead = async () =>{
        try {
            const res = await fetch(api);
            console.log(res)
            if (!res.ok){ //ERror
                throw new Error(`Response : ${res.status}`)
            }
            if (res.status === 200) {
                const data = await res.json();
                console.log(data)
                // setItems(res)
                
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    const fnaxios = async ()=>{
        try {
            const Response = await axios.get(api)
            console.log({Response}) //การกำหนกชื่อคีย์โดยการสร้างobjec
            setItems(Response.data);
        } catch (error) {
            
        }
    }

    console.log(items)

    return (
       <div className="flex flex-row flex-wrap items-center justify-center h-screen">
        {isLoading ? (
            <div>Loading</div>
        ): (
            <>
            {items?.results.map((items) => (
                <div className="p-4 border border-gray-300">
                    <h2 className="text-xl">{items.name}</h2>
                </div>
                
            )
        )}
            </>
        ) }
       </div>

    //    <div className="flex flex-row flex-wrap items-center justify-center h-screen">

    //    </div>

    )
}

export default Apipokemon;