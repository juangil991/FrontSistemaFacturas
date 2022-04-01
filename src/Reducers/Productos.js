import {getProducto_ActionType} from "../Constans/Productos";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const getProductos=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case getProducto_ActionType.GET_PRODUCTO_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case getProducto_ActionType.GET_PRODUCTO_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case getProducto_ActionType.GET_PRODUCTO_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default getProductos;