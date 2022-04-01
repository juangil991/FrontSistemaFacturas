import {putFactura_ActionType} from "../../Constans/Factura";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const putFactura=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case putFactura_ActionType.PUT_FACTURA_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case putFactura_ActionType.PUT_FACTURA_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case putFactura_ActionType.PUT_FACTURA_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default putFactura;