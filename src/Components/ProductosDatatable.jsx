import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchProductoGet from '../Actions/Producto/getProductoAction';
import fetchProductoPost from '../Actions/Producto/postProductoAction';
import { fetchVolanteAddCantidades } from '../Actions/Volantes/productosVolanteAction';
import { fetchProductoRestarCantidad } from '../Actions/Factura/agregarProductoFactura';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';

const ProductosDatatable = (props) => {
    const dispatch = useDispatch();
    const [cantidad, setCantidad] = useState(1);
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
            selector: row => <div>
                <td>{props.tipo !== "menu" && <input defaultValue={1} class="input is-primary" type="number"
                    onChange={(e) => {
                        e.target.value > 0 ? setCantidad(e.target.value) : setCantidad(1)
                        e.target.value < row.cantidadProducto ? setCantidad(e.target.value) : e.target.value = row.cantidadProducto
                        console.log(props.tipo)
                    }}
                />}</td></div>
        },
        {
            name: 'AÑADIR PRODUCTO',
            selector: row => <div><NavLink id="RouterNavLink" to="/Venta">
                {props.tipo === "factura" && <button class="button is-link"
                    onClick={() => {
                        dispatch(props.fetchProductoRestarCantidad(row.id, row, cantidad));

                    }}
                >
                    <a><i class="fa-solid fa-circle-plus"></i></a>
                </button>}
                </NavLink>
                <NavLink id="RouterNavLink" to="/provedor">
                {props.tipo === "volante" && <button class="button is-link"
                    onClick={() => {
                        dispatch(props.fetchVolanteAddCantidades(row.id, row, cantidad));
                    }}
                >
                    <a><i class="fa-solid fa-circle-plus"></i></a>
                </button>}
                </NavLink>
                </div>
                
                
                
        },
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
        estado: state.agregarProductoFactura,
        tipo: state.productosMenu.menuTypo
    }
}

const mapDispatchToProps = () => ({
    fetchProductoRestarCantidad, fetchVolanteAddCantidades
})


export default connect(stateMapToPros, mapDispatchToProps)(ProductosDatatable)
