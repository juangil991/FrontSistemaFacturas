import { añadirProductoFactura_ActionType as ActionType } from "../../Constans/Factura"

export const addProductoFactura=(producto,cantidad)=>async(dispatch)=>{
    dispatch({
        type: ActionType.ADD_PRODUCTO_FACTURA,
        result: producto,
        cantidad:parseInt(cantidad),
        
    })
}

export default addProductoFactura;