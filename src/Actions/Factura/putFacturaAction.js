import { putFactura_ActionType as ActionType } from "../../Constans/Factura";

export const fetchPutFacturaRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_FACTURA_REQUEST,
        result: url
    })
}

export const fetchPutFacturaSuccess=(Factura)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_FACTURA_SUCCESS,
        result: Factura
    })
} 

export const fetchPutFacturaError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_FACTURA_FAILURE,
        result:error
    })
}


const fetchFacturaPut=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetFacturaRequest(id));
        fetch(`http://localhost:8080/Facturas`,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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


export default fetchFacturaPut;