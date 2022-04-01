import { postVolante_ActionType as ActionType } from "../../Constans/Volante";

export const fetchPostVolanteRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.POST_VOLANTE_REQUEST,
        result: url
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


const fetchVolantePost=(id)=>{
    return(dispatch)=>{
        dispatch(fetchGetVolanteRequest(id));
        fetch(`http://localhost:8080/Volantes`,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
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


export default fetchVolantePost;