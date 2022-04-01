import {postVolante_ActionType} from "../../Constans/Volante";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const postVolante=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case postVolante_ActionType.POST_VOLANTE_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case postVolante_ActionType.POST_VOLANTE_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case postVolante_ActionType.POST_VOLANTE_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default postVolante;