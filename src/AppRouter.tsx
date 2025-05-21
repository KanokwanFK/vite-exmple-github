//import Home from "./Home";
//import About from "./About";
//import Password from "antd/es/input/Password";
import  { createContext } from "react";
import { RouterProvider} from "react-router";
import routers from "./routers";
import { Provider, useSelector } from "react-redux";
//import Store from "./Store/Store";
import FormStore from "./Store/FromStore"

const AuthContext = createContext({
    username: "",
    Password: ""
});

function AppRouter () {
    // const value = useSelector((state)=> state)
    
    return (
        <div>
            <Provider store={FormStore}>
            {/* <AuthContext.Provider value={{username:"amin",Password:"1234"}}> */}
             <RouterProvider router={routers}/>     
            {/* </AuthContext.Provider>   */}
            </Provider>
            
         
        </div>
   );
}

export default AppRouter;