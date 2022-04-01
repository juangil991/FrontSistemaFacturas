import { putProducto_ActionType as ActionType } from "../../Constans/Productos";

export const fetchPutProductoRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_PRODUCTO_REQUEST,
        result: url
    })
}

export const fetchPutProductoSuccess=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_PRODUCTO_SUCCESS,
        result: producto
    })
} 

export const fetchPutProductoError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_PRODUCTO_FAILURE,
        result:error
    })
}


const fetchProductoPut=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetProductoRequest(id));
        fetch(`http://localhost:8080/productos`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchGetProductoSuccess(json))
        }).catch(error=>{
            dispatch(fetchGetProductoError("no se pudo eliminar el producto seleccionado"))
        });
    }

}


export default fetchProductoPut;