import {combineReducers} from "redux";
import getProductos from "./Productos/getProductos";
import deleteProductos from "./Productos/deleteProductos";
import postProductos from "./Productos/postProductos";
import putProductos from "./Productos/putProductos";


const rootReducers=combineReducers({
    getProductos, deleteProductos,postProductos,putProductos
});

export default rootReducers;