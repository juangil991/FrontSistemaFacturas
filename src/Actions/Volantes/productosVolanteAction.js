import { productoVolante_ActionType as ActionType } from "../../Constans/Volante"

export const addProductoVolante=(producto,cantidad)=>async(dispatch)=>{
    dispatch({
        type: ActionType.ADD_PRODUCTO_VOLANTE,
        result: producto,
        cantidad:cantidad
        
    })
}

export const removeProductoVolante=(producto,cantidad)=>async(dispatch)=>{
    dispatch({
        type: ActionType.REMOVE_PRODUCTO_VOLANTE,
        result: producto,
        cantidad:cantidad
    })
}

export const removeAllProductoVolante=()=>async(dispatch)=>{
    dispatch({
        type: ActionType.REMOVE_ALL_VOLANTE,
        
    })
}

export const fetchVolanteRestarCantidad=(id,producto,cantidad)=>{
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
            dispatch(dispatch(removeProductoVolante(producto,cantidad)))
        });
    }
}

export const fetchVolanteAddCantidades=(id,producto,cantidad)=>{
    const request={
        "id":id,
        "cantidad":parseInt(cantidad),
    }
    return(dispatch)=>{
        fetch(`http://localhost:8080/producto/${id}/comprar?cantidad=${cantidad}`,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(
            dispatch(dispatch(addProductoVolante(producto,cantidad)))
        );
    }

}


export default({fetchVolanteRestarCantidad,removeAllProductoVolante, fetchVolanteAddCantidades})