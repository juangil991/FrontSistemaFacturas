import { detalleVolante_ActionType as ActionType } from "../../Constans/Volante"

export const detalleVolante=(Volante,productos)=>async(dispatch)=>{
    dispatch({
        type: ActionType.VIEW_VOLANTE_DETAIL,
        result: Volante,    
        productos:productos         
    })
}

export default detalleVolante;