import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchFacturaPost from '../Actions/Factura/postFacturaAction';
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import { fetchProductoAddCantidades } from '../Actions/Factura/agregarProductoFactura';
import ProductoMenuInventario from '../Actions/Producto/productosMenuAction';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'




const Venta2 = (props) => {
    const dispatch = useDispatch();
    const [nombre,setNombre]=useState();
    const [documento,setDocumento]=useState()
    const [nombreCajero,setNombreCajero]=useState()
    const [fecha,setFecha]=useState()
    const nombrepdf=nombre;
    const columns = [
        {name: 'CONCEPTO',
            selector: row => row.name},
        {name: 'VALOR',
            selector: row => row.input},
        {name: '',
            selector: row => row.cantidad},
        {name: "",
            selector: row => row.precioProducto},
    ]

    
            const doc = new jsPDF("p","pt","a4");
     

    const data = [
        {name: 'Nombre del Cliente', input: <div>
            <td><input className="input is-primary" type="text" style={{ width: '300px' }}
            onChange={(e)=>{
                setNombre(e.target.value)
            }}     
            /></td></div>
        },

        { name: 'Documento Cliente', input: <div>
                <td><input className="input is-primary" type="text" style={{ width: '300px' }}
                    onChange={(e)=>{
                        setDocumento(e.target.value)
                    }}   
                /></td></div>
        },

        {name: 'Nombre del Cajero', input: <div>
                <td><input className="input is-primary" type="text" style={{ width: '300px' }}
                   onChange={(e)=>{
                    setNombreCajero(e.target.value)
                    console.log(props.productos)
                }} 
                /></td></div>
        },

        {name: 'Fecha', input: <div>
            <td><input className="input is-primary" type="date" style={{ width: '300px' }}
              onChange={(e)=>{
                setFecha(e.target.value)
            }}  
            /></td></div>
            },
    ]

    const column2 = [
        {name: 'NOMBRE PRODUCTO',
            selector: row => row.nombreProducto },

        {name: 'CANTIDAD',
            selector: row => row.cantidadProducto},
        {name: 'PRECIO',
            selector: row => row.precioProducto },

        {name: 'TOTAL',
            selector: row => row.totalProducto},

        {name: 'ELIMINAR PRODUCTOS',
            selector: row => <NavLink id="RouterNavLink" to="/Venta"><button className="button is-danger"
                onClick={() => {

                    dispatch(props.fetchProductoAddCantidades(row.id, row, row.cantidadProducto));
                }}
            >
                <a style={{color:'black',fontSize:'23px'}}><i className="fa-solid fa-trash-can"></i></a>
            </button></NavLink>}

    ]

    const column3 = [
        {name: 'TOTAL PRODUCTOS', },
        {name: '',},
        {name: '',},
        {name: '',selector: row => row.total}, 
        {name: '' },

    ]

    const data3 = [
        {total: props.total}
    ]

    return (<>
      
        <div className="table-responsive" >
        
            <b style={{color:'black',fontSize:'40px',fontFamily: 'Oswald sans-serif'}}>VENTAS</b>
            <br />
        <NavLink to="/productos2"><button className="button is-dark" style={{ left: '20px' }}
        onClick={()=>{
            dispatch(props.ProductoMenuInventario("factura"))
        }}>
            AGREGAR PRODUCTOS</button></NavLink>
            
            {props.productos.length > 0 && <DataTable id="my-table"
                columns={column2}
                data={props.productos}
            />}
            {props.productos.length > 0 && <DataTable 
                columns={column3}
                data={data3}
            />}
                        <DataTable
                columns={columns}
                data={data}
            />
            <br />
       
            <button className="button is-link" style={{ left: '20px' }}
               onClick={()=>{ 
                const data =[nombre,documento,nombreCajero,fecha]
                   doc.autoTable({
                       head:[["NombreCliente","Documento","NombreCajero","Fecha"]],
                       body:[data]
                   })
                   const productos = props.productos.map(p=> [p.nombreProducto, p.cantidadProducto
                    ,p.precioProducto,p.totalProducto]);

                   doc.autoTable({
                       head:[["Nombre Producto", "Cantidad", "Precio","Total producto"]],
                       body:productos
                    })
                    const total=[["","","",props.total]]
                    doc.autoTable({
                        head:[["","","","TOTAL"]],
                        body:total
                    })
                   doc.save("Factura")
                dispatch(props.fetchFacturaPost(nombre,documento,nombreCajero,fecha,props.productos,props.total))
            }} 
            
            >GENERAR FACTURA</button>

        </div>
    
    </>);
}

const stateMapToPros = state => {
    return {
        productos: state.agregarProductoFactura.productos,
        total: state.agregarProductoFactura.total
    }
}
const mapDispatchToProps = () => ({
    fetchProductoAddCantidades, fetchFacturaPost, ProductoMenuInventario})

export default connect(stateMapToPros, mapDispatchToProps)(Venta2)