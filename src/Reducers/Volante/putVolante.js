import {putVolante_ActionType} from "../../Constans/Volante";


const INITIAL_STATE={
    response: [],
    error:'',
    url:""

}

const putVolante=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case putVolante_ActionType.PUT_VOLANTE_REQUEST:
            return{
                ...state,
                url:action.result
                
            }
        case putVolante_ActionType.PUT_VOLANTE_SUCCESS:
            return{
                ...state,
                response: action.result,
                error:'',
              
            }
        case putVolante_ActionType.PUT_VOLANTE_FAILURE:
            return{
                ...state,
                response:[],
                error:action.result,
            }
        default: return state;
    }

}

export default putVolante;