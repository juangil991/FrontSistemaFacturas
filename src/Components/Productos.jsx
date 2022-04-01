import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchProductoGet from '../Actions/Producto/getProductoAction';



const ProductoComponent = () => {
    const dispatch = useDispatch();

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
                        <th style={{ color: "white" }}>1</th>
                        <td style={{ color: "white" }}>hola</td>
                        <td style={{ color: "white" }}>como</td>
                        <td style={{ color: "white" }}>estas</td>
                        <td style={{ color: "white" }}><button className="button is-dark">Añadir</button>
                            <button className="button is-danger">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </>);
}

export default ProductoComponent;