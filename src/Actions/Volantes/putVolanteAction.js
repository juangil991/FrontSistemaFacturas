import { putVolante_ActionType as ActionType } from "../../Constans/Volante";

export const fetchPutVolanteRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_VOLANTE_REQUEST,
        result: url
    })
}

export const fetchPutVolanteSuccess=(Volante)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_VOLANTE_SUCCESS,
        result: Volante
    })
} 

export const fetchPutVolanteError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.PUT_VOLANTE_FAILURE,
        result:error
    })
}


const fetchVolantePut=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetVolanteRequest(id));
        fetch(`http://localhost:8080/Volantes`,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response=>Response.json())
        .then(json=>{
            dispatch(fetchGetVolanteSuccess(json))
        }).catch(error=>{
            dispatch(fetchGetVolanteError("no se pudo eliminar el Volante seleccionado"))
        });
    }

}


export default fetchVolantePut;