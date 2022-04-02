import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import  {fetchProductoAddCantidades } from '../Actions/Factura/agregarProductoFactura';


const Venta2 = (props) => {
    const dispatch = useDispatch();
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
            name:<NavLink to="/productos2"><button class="button is-light">AGREGAR PRODUCTOS</button></NavLink>,
            selector: row => row.precioProducto
        },
       

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
            selector: row => row.totalProducto
        },
        {
            name: 'ELIMINAR PRODUCTOS',
            selector: row =><NavLink to="/Venta"><button class="input is-primary"
            onClick={()=>{
             
                dispatch(props.fetchProductoAddCantidades(row.id,row,row.cantidadProducto));
            }}
            >
                <a><i class="fa-solid fa-circle-plus"></i></a>
            </button></NavLink>
        }

    ]

    const column3 = [
        {
            name: 'TOTAL PRODUCTOS',
            
        },     {
            name: '',
        
        },
        {
            name: '',
            
        },
        {
            name: '',
            selector: row => row.total
        }

    ]

    const data3 = [
        {
            total:props.total
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
             {props.productos.length>0 &&  <DataTable
                columns={column3}
                data={data3}
            />}
            
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        productos: state.agregarProductoFactura.productos,
        total:state.agregarProductoFactura.total
    }
}
const mapDispatchToProps = () => ({
    fetchProductoAddCantidades
})

export default connect(stateMapToPros,mapDispatchToProps)(Venta2)