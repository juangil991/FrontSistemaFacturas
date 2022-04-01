import {putProducto_ActionType} from "../../Constans/Productos";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const putProductos=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case putProducto_ActionType.PUT_PRODUCTO_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case putProducto_ActionType.PUT_PRODUCTO_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case putProducto_ActionType.PUT_PRODUCTO_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default putProductos;