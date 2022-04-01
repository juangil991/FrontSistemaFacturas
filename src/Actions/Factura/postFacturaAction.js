import { postFactura_ActionType as ActionType } from "../../Constans/Factura";

export const fetchPostFacturaRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_FACTURA_REQUEST,
        result: url
    })
}

export const fetchPostFacturaSuccess=(Factura)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_FACTURA_SUCCESS,
        result: Factura
    })
} 

export const fetchPostFacturaError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_FACTURA_FAILURE,
        result:error
    })
}


const fetchFacturaPost=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetFacturaRequest(id));
        fetch(`http://localhost:8080/Facturas`,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchGetFacturaSuccess(json))
        }).catch(error=>{
            dispatch(fetchGetFacturaError("no se pudo eliminar el Factura seleccionado"))
        });
    }

}


export default fetchFacturaPost;