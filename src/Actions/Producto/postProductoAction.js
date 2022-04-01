import { postProducto_ActionType as ActionType } from "../../Constans/Productos";

export const fetchPostProductoRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_PRODUCTO_REQUEST,
        result: url
    })
}

export const fetchPostProductoSuccess=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_PRODUCTO_SUCCESS,
        result: producto
    })
} 

export const fetchPostProductoError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_PRODUCTO_FAILURE,
        result:error
    })
}


const fetchProductoPost=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetProductoRequest(id));
        fetch(`http://localhost:8080/productos`,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
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


export default fetchProductoPost;