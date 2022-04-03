import { detalleFactura_ActionType as ActionType } from "../../Constans/Factura"

export const detalleFactura=(factura,productos)=>async(dispatch)=>{
    dispatch({
        type: ActionType.VIEW_FACTURA_DETAIL,
        result: factura,    
        productos:productos         
    })
}

export default detalleFactura;