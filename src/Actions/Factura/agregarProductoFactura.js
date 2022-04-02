import { añadirProductoFactura_ActionType as ActionType } from "../../Constans/Factura"

export const addProductoFactura=(producto,cantidad)=>async(dispatch)=>{
    dispatch({
        type: ActionType.ADD_PRODUCTO_FACTURA,
        result: producto,
        cantidad:parseInt(cantidad),
        
    })
}

export const removeProductoFactura=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.REMOVE_PRODUCTO_FACTURA,
        result: producto,
        
    })
}

const fetchProductoActualizarCantidad=(id,producto,cantidad)=>{
    const request={
        "id":id,
        "cantidad":parseInt(cantidad),
    }
    return(dispatch)=>{
        fetch(`http://localhost:8080/producto/${id}/vender?cantidad=${cantidad}`,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>{
            dispatch(dispatch(addProductoFactura(producto,cantidad)))
        });
    }

}


export default fetchProductoActualizarCantidad;