import { menu_ActionType as ActionType } from "../../Constans/Productos"


export const ProductoMenuInventario=(estado)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PRODUCTO_MENU_INVENTARIO,
        result: estado
        
    })
}

export default (ProductoMenuInventario)