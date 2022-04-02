import { añadirProductoFactura_ActionType } from "../../Constans/Factura";

const INITIAL_STATE = {
  productos:[]};

const agregarProductoFactura = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case añadirProductoFactura_ActionType.ADD_PRODUCTO_FACTURA:
      return {
        ...state,
       productos:[...state.productos,{id: action.result.id,
        nombreProducto: action.result.nombreProducto,
        cantidadProducto: action.cantidad,
        precioProducto: action.result.precioProducto,
        totalProducto:action.cantidad*action.result.precioProducto,
      }]};
    default:
      return state;
  }
};

export default agregarProductoFactura;
