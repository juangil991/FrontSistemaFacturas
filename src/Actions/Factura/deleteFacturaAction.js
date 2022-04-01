import { deleteFactura_ActionType as ActionType } from "../../Constans/Factura";

export const fetchDeleteFacturaRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_FACTURA_REQUEST,
        result: url
    })
}

export const fetchdeleteFacturaSuccess=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_FACTURA_SUCCESS,
        result: producto
    })
}

export const fetchDeleteFacturaError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_FACTURA_FAILURE,
        result:error
    })
}


const fetchFacturaDelete=(id)=>{
    return(dispatch)=>{
        dispatch(fetchDeleteFacturaRequest(id));
        fetch(`http://localhost:8080/producto/${id}`,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>{
            dispatch(fetchdeleteFacturaSuccess(Response.json))
        }).catch(error=>{
            dispatch(fetchDeleteFacturaError("no se pudo eliminar el producto seleccionado"))
        });
    }

}

export default fetchFacturaDelete;