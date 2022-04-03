import { productoVolante_ActionType } from "../../Constans/Volante";

const INITIAL_STATE = {
  productos:[],
};

const productoVolante = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productoVolante_ActionType .ADD_PRODUCTO_VOLANTE:
      return {
        ...state,
       productos:[...state.productos,{id: action.result.id,
        nombreProducto: action.result.nombreProducto,
        cantidadProducto: action.cantidad,
        precioProducto: action.result.precioProducto,
      }],
    
    };
    case productoVolante_ActionType .REMOVE_PRODUCTO_VOLANTE:
        return {
          ...state,
         productos:state.productos.filter((e)=>{
            return e.id!=action.result.id
         }),
      
      };
      case productoVolante_ActionType .REMOVE_ALL_VOLANTE:
        return {
         productos:[], 
      
      };
    default:
      return state;
  }
};

export default productoVolante;
