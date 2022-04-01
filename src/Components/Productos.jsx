import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchProductoGet from '../Actions/Producto/getProductoAction';



const ProductoComponent = (props) => {
    const dispatch = useDispatch();
    const producto=props.productos;

    useEffect(() => {
        dispatch(fetchProductoGet())
    }, []);

    return (<>
        <div class="table-container">
            <table class="table is-fullwidth">
                <thead className='has-background-dark'>
                    <tr>
                        <th style={{ color: "white" }}>ID</th>
                        <th style={{ color: "white" }}>NOMBRE</th>
                        <th style={{ color: "white" }}>CANTIDAD</th>
                        <th style={{ color: "white" }}>PRECIO</th>
                        <th></th>
                    </tr>
                </thead>
                <tfoot className='has-background-link-dark'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button class="button is-success"data-target="modal-js-example">
                               Nuevo Producto
                            </button>
                        </td>
                    </tr>
                </tfoot>
                <tbody className='has-background-link-dark'>             
                    <tr>
                        {producto.map((p)=>{
                        return(<>
                        <th style={{ color: "white" }}>{p.id}</th>
                        <td style={{ color: "white" }}>{p.nombreProducto}</td>
                        <td style={{ color: "white" }}>{p.cantidadProducto}</td>
                        <td style={{ color: "white" }}>{p.precioProducto}</td>
                        <td style={{ color: "white" }}><button className="button is-dark">Añadir</button>
                            <button className="button is-danger">Eliminar</button>
                        </td>
                        </>
                        )})}
                    </tr>
                </tbody>
            </table>
        </div>

    </>);
}

const stateMapToPros = state => {
    return {
        productos:state.getProductos.response
    }
}


export default connect(stateMapToPros)(ProductoComponent)