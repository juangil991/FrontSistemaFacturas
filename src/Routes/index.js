import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ingresar from "../Components/Ingresar";
import Registrarse from "../Components/Registrarse";
import NavBar from "../Components/NavBar";
import ProductoComponent from "../Components/Productos";
import VentaComponent from "../Components/Venta";
import ProductosDatatable from "../Components/ProductosDatatable";

export const RoutesPath = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/productos2" element={<ProductosDatatable/>}/>
        <Route path="/" element={<VentaComponent />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/productos" element={<ProductoComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPath;
