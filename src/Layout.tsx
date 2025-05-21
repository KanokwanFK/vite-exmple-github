import { Outlet } from "react-router";
import Narbars from "./components/Narbars";

function LayoutApp (){
    return (
        <div>
            <div> 
                <Narbars/>
            </div>
            <div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default LayoutApp;