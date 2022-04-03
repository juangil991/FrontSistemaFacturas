import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ingresar from "../Components/Ingresar";
import Registrarse from "../Components/Registrarse";
import NavBar from "../Components/NavBar";
import ProductoComponent from "../Components/Productos";
import VentaComponent from "../Components/Venta";
import ProductosDatatable from "../Components/ProductosDatatable";
import Venta2 from "../Components/Venta2";
import Volantes from "../Components/Volantes";
import HistorialFacturas from "../Components/HistorialFacturas";
import DetalleFactura from "../Components/DetalleFactura";
import HistorialVolantes from "../Components/HistorialVolantes";
import DetalleProvedor from "../Components/DetalleProvedor";

export const RoutesPath = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/productos2" element={<ProductosDatatable/>}/>
        <Route path="/" element={<VentaComponent />} />
        <Route path="/facturas" element={<HistorialFacturas/>}/>
        <Route path="/venta" element={<Venta2 />} />
        <Route path="/detalleFactura" element={<DetalleFactura />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/productos" element={<ProductoComponent />} />
        <Route path="/provedor" element={<Volantes />}/>
        <Route path="/volantes" element={<HistorialVolantes/>}/>
        <Route path="/volante" element={<DetalleProvedor/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPath;
