import { añadirProductoFactura_ActionType as ActionType } from "../../Constans/Factura"

export const addProductoFactura=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.ADD_PRODUCTO_FACTURA,
        result: producto
    })
}

export default addProductoFactura;