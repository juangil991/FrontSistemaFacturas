import {detalleVolante_ActionType} from "../../Constans/Volante";


const INITIAL_STATE={
    volante:{},
    productos:[]
 
}

const detalleVolante=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case detalleVolante_ActionType.VIEW_VOLANTE_DETAIL:
            return{
                ...state,
                Volante:action.result,
                productos:action.productos
            
            }
      
        default: return state;
    }

}

export default detalleVolante;