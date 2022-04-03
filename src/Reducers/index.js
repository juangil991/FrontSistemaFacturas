import {combineReducers} from "redux";
import getProductos from "./Productos/getProductos";
import deleteProductos from "./Productos/deleteProductos";
import postProductos from "./Productos/postProductos";
import putProductos from "./Productos/putProductos";
import agregarProductoFactura from "../Reducers/Factura/agregarProductoFactura";
import postFactura from "./Factura/postFactura";
import productosMenu from "./Productos/productosMenu"
import productoVolante from "./Volante/productoVolante";


const rootReducers=combineReducers({
    getProductos, deleteProductos,postProductos,putProductos,agregarProductoFactura,postFactura,
    productosMenu, productoVolante

});

export default rootReducers;