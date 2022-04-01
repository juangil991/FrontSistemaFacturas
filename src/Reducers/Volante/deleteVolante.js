import {deleteVolante_ActionType} from "../../Constans/Volante";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const deleteVolante=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case deleteVolante_ActionType.DELETE_VOLANTE_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case deleteVolante_ActionType.DELETE_VOLANTE_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case deleteVolante_ActionType.DELETE_VOLANTE_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default deleteVolante;