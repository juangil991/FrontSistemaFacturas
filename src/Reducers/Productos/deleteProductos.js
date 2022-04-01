import {deleteProducto_ActionType} from "../../Constans/Productos";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const deleteProductos=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case deleteProducto_ActionType.DELETE_PRODUCTO_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case deleteProducto_ActionType.DELETE_PRODUCTO_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case deleteProducto_ActionType.DELETE_PRODUCTO_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default deleteProductos;