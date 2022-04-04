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


const fetchProductoPost=(nombre,cantidad,precio,maximo,minimo)=>{
    const request={
        "nombreProducto":nombre,
        "cantidadProducto":cantidad,
        "precioProducto":precio,
        "maximaCantidad":maximo,
        "minimaCantidad":minimo


    }
    return(dispatch)=>{
        dispatch(fetchPostProductoRequest(request));
        fetch(`http://localhost:8080/producto/Save`,{
            method: 'POST', // *Post, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchPostProductoSuccess(json))
        }).catch(error=>{
            dispatch(fetchPostProductoError("no se pudo crear el producto seleccionado"))
        });
    }

}


export default fetchProductoPost;