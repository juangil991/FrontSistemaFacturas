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
import { Button } from '@material-ui/core';

const ProductosDatatable = (props) => {
    const dispatch = useDispatch();
    const [cantidad, setCantidad] = useState(1);
    const [Stock, setStock] = useState(10);
    const [Nombre, setNombre] = useState();
    const [Precio, setPrecio] = useState();
    const [maximo, setMaximo] = useState(30);
    const [minimo, setMinimo] = useState(5);
    const [reload,setReload]=useState(false)
    useEffect(() => {
        dispatch(fetchProductoGet())
       setReload(false)
    }, [reload])


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
            name: props.tipo !== "menu" ? 'CANTIDAD' : 'ESTADO',
            selector: row => <div>
                <td>{props.tipo !== "menu" && <input defaultValue={1} class="input is-primary" type="number"
                    onChange={(e) => {
                        e.target.value > 0 ? setCantidad(e.target.value) : setCantidad(1)
                        props.tipo === "factura" && <div>{e.target.value < row.cantidadProducto ? setCantidad(e.target.value) :
                            e.target.value = row.cantidadProducto}</div>
                        console.log(props.tipo)
                    }}
                />}{row.maximaCantidad>row.cantidadProducto && row.minimaCantidad<row.cantidadProducto? props.tipo === "menu" && 
                <div><a><span style={{ color: 'green', fontSize: '33px' }}>
                    <i class="fa-solid fa-square-check"></i></span></a></div>: props.tipo === "menu" && <div>
                    <a><span style={{ color: 'yellow', fontSize: '33px' }}>
                        <i class="fa-solid fa-triangle-exclamation"></i></span></a>                        
                        </div>}</td></div>
        },
        {
            name: props.tipo !== "menu" ? 'AÑADIR PRODUCTO' : 'DESCRIPCION',
            selector: row => <div><NavLink id="RouterNavLink" to="/">
                {props.tipo === "factura" && <button class="button is-black"
                    onClick={() => {
                        dispatch(props.fetchProductoRestarCantidad(row.id, row, cantidad));

                    }}
                >
                    <a style={{ fontSize: '30px', color: 'green' }}><i class="fa-solid fa-circle-plus"></i></a>
                </button>}
            </NavLink>
                <NavLink id="RouterNavLink" to="/provedor">
                    {props.tipo === "volante" && <button class="button is-black"
                        onClick={() => {
                            dispatch(props.fetchVolanteAddCantidades(row.id, row, cantidad));                          
                        }}
                    >
                        <a style={{ fontSize: '30px', color: 'green' }} ><i class="fa-solid fa-circle-plus"></i></a>
                    </button>}
                </NavLink>
            {row.maximaCantidad>row.cantidadProducto && row.minimaCantidad<row.cantidadProducto && props.tipo === "menu"?  
                <div>STOCK OK</div>: row.maximaCantidad<row.cantidadProducto?props.tipo === "menu"&&
                <div>ALTO STOCK</div>:
                props.tipo === "menu"&&<div>BAJO STOCK</div>                
                       }</div>



        },
    ]


    const columnsadd = [
  
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
            name: 'MAXIMO',
            selector: row => row.Maximo
        },
        {
            name: 'MINIMO',
            selector: row => row.Minimo
        },
        {
            name: 'GUARDAR',
            selector: row => row.guardar
        },


    ]

    const DataAdd = [
        {       
            nombreProducto: <input  class="input is-primary" type="text" 
            onChange={(e)=>{
                setNombre(e.target.value);
                console.log(props.productos.maximaCantidad)
               
            }}
            />,
            cantidadProducto: <input  class="input is-primary" type="number" 
            onChange={(e)=>{
                setStock(e.target.value);
            }}
            />,
            precioProducto: <input class="input is-primary" type="number" 
            onChange={(e)=>{
                setPrecio(e.target.value);
            }}
            />,
            Maximo: <input class="input is-primary" type="number" 
            onChange={(e)=>{
                setMaximo(e.target.value);
                
            }}
            />,
            Minimo: <input class="input is-primary" type="number" 
            onChange={(e)=>{
                setMinimo(e.target.value);
            }}
            />,
            guardar:<a
            onClick={()=>{
                dispatch(fetchProductoPost(Nombre,Stock,Precio,maximo,minimo));
                setReload(true)
            }}
            >
                
                <span style={{fontSize:'35px', color:'aquamarine'}}><i class="fa-solid fa-floppy-disk"></i></span>

                </a>

        }
    ]

    return (<>
        <b style={{ color: 'black', fontSize: '40px', fontFamily: 'Oswald sans-serif' }}>PRODUCTOS</b>
        {props.tipo === "menu"&&  <DataTable
            columns={columnsadd}
            data={DataAdd}
            
        />}
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
