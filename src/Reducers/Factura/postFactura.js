import {postFactura_ActionType} from "../../Constans/Factura";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const postFactura=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case postFactura_ActionType.POST_FACTURA_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case postFactura_ActionType.POST_FACTURA_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case postFactura_ActionType.POST_FACTURA_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default postFactura;