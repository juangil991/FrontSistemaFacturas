import {detalleFactura_ActionType} from "../../Constans/Factura";


const INITIAL_STATE={
    factura:{},
    productos:[]
 
}

const detalleFactura=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case detalleFactura_ActionType.VIEW_FACTURA_DETAIL:
            return{
                ...state,
                factura:action.result,
                productos:action.productos
            
            }
      
        default: return state;
    }

}

export default detalleFactura;