import { getFactura_ActionType as ActionType } from "../../Constans/Factura";

export const fetchGetFacturaRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_FACTURA_REQUEST,
        result: url
    })
}

export const fetchGetFacturaSuccess=(producto)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_FACTURA_SUCCESS,
        result: producto
    })
} 

export const fetchGetFacturaError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_FACTURA_FAILURE,
        result:error
    })
}


const fetchFacturaGet=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetFacturaRequest(id));
        fetch(`http://localhost:8080/facturas`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchGetFacturaSuccess(json))
        }).catch(error=>{
            dispatch(fetchGetFacturaError("no se pudo eliminar el producto seleccionado"))
        });
    }

}


export default fetchFacturaGet;