import { deleteProducto_ActionType as ActionType } from "../../Constans/Productos";

export const fetchDeleteProductoRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_PRODUCTO_REQUEST,
        result: url
    })
}

export const fetchdeleteProductoSuccess=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_PRODUCTO_SUCCESS,
        result: producto
    })
}

export const fetchDeleteProductoError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_PRODUCTO_FAILURE,
        result:error
    })
}


const fetchProductoDelete=(id)=>{
    return(dispatch)=>{
        dispatch(fetchDeleteProductoRequest(id));
        fetch(`http://localhost:8080/producto/${id}`,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>{
            dispatch(fetchdeleteProductoSuccess(Response.json))
        }).catch(error=>{
            dispatch(fetchDeleteProductoError("no se pudo eliminar el producto seleccionado"))
        });
    }

}

export default fetchProductoDelete;