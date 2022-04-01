import {getFactura_ActionType} from "../../Constans/Factura";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const getFactura=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case getFactura_ActionType.GET_FACTURA_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case getFactura_ActionType.GET_FACTURA_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case getFactura_ActionType.GET_FACTURA_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default getFactura;