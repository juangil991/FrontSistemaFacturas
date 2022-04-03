import {getVolante_ActionType} from "../../Constans/Volante";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const getVolante=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case getVolante_ActionType.GET_VOLANTE_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case getVolante_ActionType.GET_VOLANTE_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case getVolante_ActionType.GET_VOLANTE_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default getVolante;