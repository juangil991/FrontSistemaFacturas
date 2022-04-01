
import { getVolante_ActionType as ActionType } from "../../Constans/Volante";

export const fetchGetVolanteRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_VOLANTE_REQUEST,
        result: url
    })
}

export const fetchGetVolanteSuccess=(Volante)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_VOLANTE_SUCCESS,
        result: Volante
    })
} 

export const fetchGetVolanteError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_VOLANTE_FAILURE,
        result:error
    })
}


const fetchVolanteGet=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetVolanteRequest(id));
        fetch(`http://localhost:8080/Volantes`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
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


export default fetchVolanteGet;
