import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchFacturaPost from '../Actions/Factura/postFacturaAction';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import { fetchProductoAddCantidades } from '../Actions/Factura/agregarProductoFactura';
import ProductoMenuInventario from '../Actions/Producto/productosMenuAction'


const DetalleFactura = (props) => {


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
            name: "",
            selector: row => row.precioProducto
        },
    ]

    const data = [
        {
            name: 'Consecutivo', input: props.factura.id
        },
        {
            name: 'Nombre del Cliente', input: props.factura.nombreCliente
        },

        {
            name: 'Documento Cliente', input: props.factura.documentoCliente
        },

        {
            name: 'Nombre del Cajero', input: props.factura.nombreCajero
        },

        { name: 'Fecha', input: props.factura.fecha }
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

    ]

    const column3 = [
        { name: 'TOTAL PRODUCTOS', },
        { name: '', },
        { name: '', selector: row => row.total },

    ]

    const data3 = [
        { total: props.factura.total }
    ]

    return (<>

        <div className="table-responsive">
            <b style={{ color: 'black', fontSize: '40px', fontFamily: 'Oswald sans-serif' }}>FACTURA</b>
            <br />
            <DataTable
                columns={columns}
                data={data}
            />
            <DataTable
                columns={column2}
                data={props.productos}
            />
            <DataTable
                columns={column3}
                data={data3}
            />
            <br />
            <NavLink id="RouterNavLink" to="/facturas">
                <button className="button is-link" style={{ left: '20px' }}>REGRESAR</button>
            </NavLink>
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        factura: state.detalleFactura.factura,
        productos: state.detalleFactura.productos,
    }
}

export default connect(stateMapToPros)(DetalleFactura)