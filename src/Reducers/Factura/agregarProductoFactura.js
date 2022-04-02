import { añadirProductoFactura_ActionType } from "../../Constans/Factura";

const INITIAL_STATE = {
  productos:[],
    total:0
};

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
      }],
      total:state.total+action.cantidad*action.result.precioProducto
    
    };
    case añadirProductoFactura_ActionType.REMOVE_PRODUCTO_FACTURA:
        return {
          ...state,
         productos:state.productos.filter((e)=>{
            return e.id!=action.result.id
         }),
        total:state.total-action.cantidad*action.result.precioProducto
      
      };
    default:
      return state;
  }
};

export default agregarProductoFactura;
