import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchVolanteGet from '../Actions/Volantes/getVolanteAction'; 
import styledComponents from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';

const ProductosDatatable = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVolanteGet())
    }, [])


    const columns = [
        {
            name: 'CONSECUTIVO',
            selector: row => row.id
        },
        {
            name: 'NOMBRE PROVEDOR',
            selector: row => row.nombreProvedor
        },
        {
            name: 'TELEFONO PROVEDOR',
            selector: row => row.telefonoProvedor
        },
        {
            name: 'DOCUMENTO PROVEDOR',
            selector: row => row.documentoProvedor
        },
        {
            name: 'DETALLE',
            selector: row => 
                <NavLink id="RouterNavLink" to="/detalleVolante">
           
                    <a style={{fontSize:'30px',color:'aquamarine'}} onClick={()=>{
                        
                    }}><i class="fa-solid fa-file-lines"></i></a>
           
                </NavLink>   
                
        }
        
    ]
    return (<>
    <b style={{ color: 'black', fontSize: '40px', fontFamily: 'Oswald sans-serif' }}>VOLANTES</b>
        <DataTable
            columns={columns}
            data={props.Volantes}
            pagination
        />

    </>);
}

const stateMapToPros = state => {
    return {
        Volantes: state.getVolante.response,
        estado: state.agregarProductoVolante,
        tipo: state.productosMenu.menuTypo
    }
}

const mapDispatchToProps = () => ({

})


export default connect(stateMapToPros, mapDispatchToProps)(ProductosDatatable)
