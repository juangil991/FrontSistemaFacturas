import { añadirProductoFactura_ActionType} from "../../Constans/Factura"


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const agregarProductoFactura=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case añadirProductoFactura_ActionType.ADD_PRODUCTO_FACTURA:
            return{
                ...state,
                response:[...state.response,action.result]
                
            }
        default: return state;
    }

}

export default agregarProductoFactura;