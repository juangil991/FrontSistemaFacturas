import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';

const venta2 = (props) => {

    const columns = [
        {
            name: 'CONCEPTO',
            selector: row => row.name
        },
        {
            name: 'VALOR',
            selector: row => row.input
        },
        {
            name: '',
            selector: row => row.cantidad
        },
        {
            name: '',
            selector: row => row.precioProducto
        }

    ]

    const data = [
        { name: 'Nombre del Cliente', input: <input class="input is-primary" type="text" /> },
        { name: 'Documento Cliente', input: <input class="input is-primary" type="text" /> },
        { name: 'Nombre del Cajero', input: <input class="input is-primary" type="text" /> },
        { name: 'Nombre del Cajero', input: <input class="input is-primary" type="text" /> },
    ]

    const column2 = [
        {
            name: 'NOMBRE PRODUCTO',
            selector: row => row.nombreProducto
        },
        {
            name: 'CANTIDAD',
            selector: row => row.cantidadProducto
        },
        {
            name: 'PRECIO',
            selector: row => row.precioProducto
        },
        {
            name: '',
            selector: row => row.relleno}
 
    ]


    return (<>
        <DataTable
            columns={columns}
            data={data}
        />
        <DataTable
            columns={column2}
            data={props.productos}
        />

    </>);
}

const stateMapToPros = state => {
    return {
        productos: state.agregarProductoFactura.response
    }
}


export default connect(stateMapToPros)(venta2)