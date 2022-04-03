export const getFactura_ActionType = {
    GET_FACTURA_REQUEST:'GET_FACTURA_REQUEST',
    GET_FACTURA_SUCCESS:'GET_FACTURA_SUCCESS',
    GET_FACTURA_FAILURE:'GET_FACTURA_FAILURE'
 }

export const postFactura_ActionType = {
    POST_FACTURA_REQUEST:'POST_FACTURA_REQUEST',
    POST_FACTURA_SUCCESS:'POST_FACTURA_SUCCESS',
    POST_FACTURA_FAILURE:'POST_FACTURA_FAILURE'
 }
 
 export const putFactura_ActionType = {
    PUT_FACTURA_REQUEST:'PUT_FACTURA_REQUEST',
    PUT_FACTURA_SUCCESS:'PUT_FACTURA_SUCCESS',
    PUT_FACTURA_FAILURE:'PUT_FACTURA_FAILURE'
 }

 export const deleteFactura_ActionType = {
    DELETE_FACTURA_REQUEST:'DELETE_FACTURA_REQUEST',
    DELETE_FACTURA_SUCCESS:'DELETE_FACTURA_SUCCESS',
    DELETE_FACTURA_FAILURE:'DELETE_FACTURA_FAILURE'
 }

 export const añadirProductoFactura_ActionType ={
     ADD_PRODUCTO_FACTURA:"ADD_PRODUCTO_FACTURA",
     REMOVE_PRODUCTO_FACTURA:"REMOVE_PRODUCTO_FACTURA",
     REMOVE_ALL_FACTURA:"REMOVE_ALL_FACTURA"
 }

 export const detalleFactura_ActionType={
    VIEW_FACTURA_DETAIL:"VIEW_FACTURA_DETAIL"
 }

 export default{getFactura_ActionType, postFactura_ActionType,
    putFactura_ActionType, deleteFactura_ActionType,  añadirProductoFactura_ActionType}
