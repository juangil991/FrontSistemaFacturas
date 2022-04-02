import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchProductoGet from '../Actions/Producto/getProductoAction';
import fetchProductoPost from '../Actions/Producto/postProductoAction';
import { addProductoFactura } from '../Actions/Factura/agregarProductoFactura';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';

const ProductosDatatable = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductoGet())
    }, [])


    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'NOMBRE',
            selector: row => row.nombreProducto
        },
        {
            name: 'CANTIDAD',
            selector: row => row.cantidadProducto
        },
        {
            name: 'PRECIO',
            selector: row => row.precioProducto
        }
    ]
    return (<>
    <DataTable
        columns={columns}
        data={props.productos}
        pagination
    />

    </>);
}

const stateMapToPros = state => {
    return {
        productos: state.getProductos.response
    }
}


export default connect(stateMapToPros)(ProductosDatatable)
