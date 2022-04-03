import {menu_ActionType} from "../../Constans/Productos";


const INITIAL_STATE={

    menuTypo:"inicial",
    
}

const productosMenu=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case menu_ActionType.PRODUCTO_MENU_INVENTARIO:
            return{            
                menuTypo:action.result              
            }
            
        default: return state;
    }

}

export default productosMenu ;