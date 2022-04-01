import {postProducto_ActionType} from "../../Constans/Productos";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const postProductos=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case postProducto_ActionType.POST_PRODUCTO_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case postProducto_ActionType.POST_PRODUCTO_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case postProducto_ActionType.POST_PRODUCTO_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default postProductos;