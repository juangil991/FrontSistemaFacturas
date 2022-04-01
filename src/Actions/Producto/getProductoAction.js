import { getProducto_ActionType as ActionType } from "../../Constans/Productos";

export const fetchGetProductoRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_PRODUCTO_REQUEST,
        result: url
    })
}

export const fetchGetProductoSuccess=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_PRODUCTO_SUCCESS,
        result: producto
    })
} 

export const fetchGetProductoError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_PRODUCTO_FAILURE,
        result:error
    })
}


const fetchProductoGet=(id)=>{
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


export default fetchProductoGet;
