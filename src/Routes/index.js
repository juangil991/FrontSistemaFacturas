import {BrowserRouter, Route, Routes} from "react-router-dom"
import Ingresar from "../Components/Ingresar";
import Registrarse from "../Components/Registrarse";
import NavBar from '../Components/NavBar';
import ProductoComponent from "../Components/Productos";

export const RoutesPath = () => {
    return ( 
       <BrowserRouter>
          <NavBar/>
           <Routes>
               <Route path="/ingresar" element={<Ingresar/>}/>
               <Route path="/registrarse" element={<Registrarse/>}/>
               <Route path="/productos" element={<ProductoComponent/>}/>
           </Routes>
       </BrowserRouter>
     );
}

export default RoutesPath;