import { postVolante_ActionType as ActionType } from "../../Constans/Volante";
import { removeAllProductoVolante } from "./productosVolanteAction";

export const fetchPostVolanteRequest=()=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_VOLANTE_REQUEST,
        result: 'Success'
    })
}

export const fetchPostVolanteSuccess=(Volante)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_VOLANTE_SUCCESS,
        result: Volante
    })
} 

export const fetchPostVolanteError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_VOLANTE_FAILURE,
        result:error
    })
}


const fetchVolantePost=(nombre,documento,telefono,productos)=>{

    const request={
        "nombreProvedor":nombre,
        "telefonoProvedor":telefono,
        "documentoProvedor":documento,
        "productos":productos

    }

    return(dispatch)=>{
        dispatch(fetchPostVolanteRequest());
        fetch(`http://localhost:8080/volante/crear/save`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchPostVolanteSuccess(json))
        }).then(dispatch(removeAllProductoVolante()))
        .catch(error=>{
            dispatch(fetchPostVolanteError("no se pudo eliminar el Volante seleccionado"))
        });
    }

}


export default fetchVolantePost;