import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchFacturaGet from '../Actions/Factura/getFacturaAction';
import { fetchVolanteAddCantidades } from '../Actions/Volantes/productosVolanteAction';
import { fetchProductoRestarCantidad } from '../Actions/Factura/agregarProductoFactura';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import detalleFactura from '../Actions/Factura/detalleFactura';

const ProductosDatatable = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFacturaGet())
    }, [])


    const columns = [
        {
            name: 'CONSECUTIVO',
            selector: row => row.id
        },
        {
            name: 'FECHA',
            selector: row => row.fecha
        },
        {
            name: 'CLIENTE',
            selector: row => row.nombreCliente
        },
        {
            name: 'DOCUMENTO',
            selector: row => row.documentoCliente
        },
        {
            name:'CAJERO',
            selector: row =>row.nombreCajero 
        },
        {
            name: 'TOTAL',
            selector: row => row.total
        },
        {
            name: 'DETALLE',
            selector: row => 
                <NavLink id="RouterNavLink" to="/detalleFactura">
           
                    <a style={{fontSize:'30px',color:'aquamarine'}} onClick={()=>{
                        dispatch(detalleFactura(row,row.productos))
                    }}><i class="fa-solid fa-file-lines"></i></a>
           
                </NavLink>   
                
        }
        
    ]
    return (<>
    <b style={{ color: 'black', fontSize: '40px', fontFamily: 'Oswald sans-serif' }}>FACTURAS</b>
        <DataTable
            columns={columns}
            data={props.facturas}
            pagination
        />

    </>);
}

const stateMapToPros = state => {
    return {
        facturas: state.getFactura.response,
        estado: state.agregarProductoFactura,
        tipo: state.productosMenu.menuTypo
    }
}

const mapDispatchToProps = () => ({
    fetchProductoRestarCantidad, fetchVolanteAddCantidades,detalleFactura
})


export default connect(stateMapToPros, mapDispatchToProps)(ProductosDatatable)
