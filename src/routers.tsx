import { createBrowserRouter } from "react-router";
import Home from "./Home";
import About from "./About";
import LayoutApp from "./Layout";
import Register from "./Register";
import Froms from "./From";
import TourismHome from "./Test/TourismHome";
import Apipokemon from "./Apipokemon";

const router = createBrowserRouter ([
    {
        path:'/', // no error next past
        element:<LayoutApp/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"About",
                element:<About/>,
            },
            {
                path:"Register",
                element:<Register/>,
            },
            {
                path:"Froms",
                element:<Froms/>,
            },
            {
                path:"TourismHome",
                element:<TourismHome/>,
            },
            {
                path:"Apipokemon",
                element:<Apipokemon/>,
            },
        ]
    },
  
])

export default router;