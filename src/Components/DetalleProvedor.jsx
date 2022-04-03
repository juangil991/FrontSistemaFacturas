import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';



const DetalleProvedor = (props) => {


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
            name: 'Consecutivo', input: props.volante.id
        },
        {
            name: 'Nombre del Cliente', input: props.volante.nombreProvedor
        },

        {
            name: 'Documento Cliente', input: props.volante.telefonoProvedor
        },

        {
            name: 'Nombre del Cajero', input: props.volante.documentoProvedor
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

    ]


    return (<>

        <div className="table-responsive">
            <b style={{ color: 'black', fontSize: '40px', fontFamily: 'Oswald sans-serif' }}>Volante</b>
            <br />
            <DataTable
                columns={columns}
                data={data}
            />
            <DataTable
                columns={column2}
                data={props.productos}
            />

            <br />
            <NavLink id="RouterNavLink" to="/Volantes">
                <button className="button is-link" style={{ left: '20px' }}>REGRESAR</button>
            </NavLink>
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        volante: state.detalleVolante.Volante,
        productos: state.detalleVolante.productos,
    }
}

export default connect(stateMapToPros)(DetalleProvedor)