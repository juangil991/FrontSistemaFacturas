import { postFactura_ActionType as ActionType } from "../../Constans/Factura";
import { removeAllProductoFactura} from "./agregarProductoFactura";

export const fetchPostFacturaRequest=()=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_FACTURA_REQUEST,
        result: "REQUESTING"
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


const fetchFacturaPost=(nombre,documento,nombreCajero,fecha,productos,total)=>{
    const request={
        "documentoCliente":documento,
        "fecha":fecha,
        "nombreCajero":nombreCajero,
        "nombreCliente":nombre,
        "productos":productos,
        "total":total

    }
    return(dispatch)=>{
        dispatch(fetchPostFacturaRequest());
        fetch(`http://localhost:8080/factura/save`,{
            method: 'POST', // *Post, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchPostFacturaSuccess(json))
        }).then(dispatch(removeAllProductoFactura()))
        .catch(error=>{
            dispatch(fetchPostFacturaError("no se pudo crear el Factura seleccionado"))
        });
    }

}


export default fetchFacturaPost;