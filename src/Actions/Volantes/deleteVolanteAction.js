import { deleteVolante_ActionType as ActionType } from "../../Constans/Volante";

export const fetchDeleteVolanteRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_VOLANTE_REQUEST,
        result: url
    })
}

export const fetchdeleteVolanteSuccess=(Volante)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_VOLANTE_SUCCESS,
        result: Volante
    })
}

export const fetchDeleteVolanteError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.DELETE_VOLANTE_FAILURE,
        result:error
    })
}


const fetchVolanteDelete=(id)=>{
    return(dispatch)=>{
        dispatch(fetchDeleteVolanteRequest(id));
        fetch(`http://localhost:8080/Volante/${id}`,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(Response=>{
            dispatch(fetchdeleteVolanteSuccess(Response.json))
        }).catch(error=>{
            dispatch(fetchDeleteVolanteError("no se pudo eliminar el Volante seleccionado"))
        });
    }

}

export default fetchVolanteDelete;