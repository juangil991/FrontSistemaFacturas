import {deleteFactura_ActionType} from "../../Constans/Factura";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const deleteFactura=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case deleteFactura_ActionType.DELETE_FACTURA_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case deleteFactura_ActionType.DELETE_FACTURA_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case deleteFactura_ActionType.DELETE_FACTURA_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default deleteFactura;