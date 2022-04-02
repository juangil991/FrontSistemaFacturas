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
        {
            name: 'Nombre del Cliente', input: <div>
                <td><input class="input is-primary" type="text" style={{width:'300px'}} /></td></div>
        },

        {
            name: 'Documento Cliente', input: <div>
            <td><input class="input is-primary" type="text" style={{width:'300px'}} /></td></div>
        },

        {
            name: 'Nombre del Cajero', input: <div>
            <td><input class="input is-primary" type="text" style={{width:'300px'}} /></td></div>
        },

        {
            name: 'Nombre del Cajero', input:<div>
            <td><input class="input is-primary" type="text" style={{width:'300px'}} /></td></div>
        },
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
            name: 'TOTAL',
            selector: row => props.total
        }

    ]

    return (<>

        <div class="table-responsive">
            <DataTable
                columns={columns}
                data={data}
            />
          {props.productos.length>0 &&  <DataTable
                columns={column2}
                data={props.productos}
            />}
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        productos: state.agregarProductoFactura.response,
        total:state.agregarProductoFactura.total
    }
}


export default connect(stateMapToPros)(venta2)