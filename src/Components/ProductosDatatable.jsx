import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchProductoGet from '../Actions/Producto/getProductoAction';
import fetchProductoPost from '../Actions/Producto/postProductoAction';
import  fetchProductoActualizarCantidad  from '../Actions/Factura/agregarProductoFactura';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';

const ProductosDatatable = (props) => {
    const dispatch = useDispatch();
    const [cantidad,setCantidad]=useState();
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
            name: 'STOCK',
            selector: row => row.cantidadProducto
        },
        {
            name: 'PRECIO',
            selector: row => row.precioProducto
        },
        {
            name: 'CANTIDAD', 
            selector: row=><div>
            <td><input defaultValue={1} class="input is-primary" type="number" 
            onChange={(e)=>{
                e.target.value>0?setCantidad(e.target.value):e.target.value=1
                e.target.value<row.cantidadProducto?setCantidad(e.target.value):e.target.value=row.cantidadProducto
                console.log(row.cantidadProducto)            
            }}
            /></td></div>
        },
        {
            name: 'AÑADIR PRODUCTO',
            selector: row =><NavLink to="/Venta"><button class="input is-primary"
            onClick={()=>{
             
                dispatch(props.fetchProductoActualizarCantidad(row.id,row,cantidad));
            }}
            >
                <a><i class="fa-solid fa-circle-plus"></i></a>
            </button></NavLink>
        },
        {
            name: 'ELIMINAR PRODUCTO',
            selector: row =><button class="input is-primary">
                <i class="fa-solid fa-trash-can"></i>
            </button>
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
        productos: state.getProductos.response,
        estado:state.agregarProductoFactura
    }
}

const mapDispatchToProps = () => ({
    fetchProductoActualizarCantidad
})


export default connect(stateMapToPros,mapDispatchToProps)(ProductosDatatable)
