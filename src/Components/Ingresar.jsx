import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import "../Css/App.css" 
import 'boxicons'



const Ingresar = (props) => {

    return (<div className="container-form1 singn-in1">
            <form className='formulario1'>
        <h2 className='create-account1'>Iniciar Sesion</h2>
            <p className='cuenta-gratis1'>¿Aun no tienes Cuenta?</p>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='contraseña'/>
            <input type="button" value="IniciarSesion" />
        
    </form>
    <div className="welcome-back1">
        <div className="message1">
            <h2>BIENVENIDO AL SISTEMA DE FACTURAS</h2>
            <p>Sin no tienes cuenta registrate</p>
            <NavLink to="/registrarse">
            <button className='singn-in-btn1'>Registrarse</button>
            </NavLink>
        </div>
    </div>

    </div>
    );
}
 
export default Ingresar;