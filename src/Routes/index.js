import {BrowserRouter, Route, Routes} from "react-router-dom"
import Ingresar from "../Components/Ingresar";
import Registrarse from "../Components/Registrarse";

export const RoutesPath = () => {
    return ( 
       <BrowserRouter>
           <Routes>
               <Route path="/ingresar" element={<Ingresar/>}/>
               <Route path="/registrarse" element={<Registrarse/>}/>
           </Routes>
       </BrowserRouter>
     );
}

export default RoutesPath;