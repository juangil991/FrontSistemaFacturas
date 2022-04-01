import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import "../Css/App.css"
import 'boxicons'



const Ingresar = (props) => {

    return (<div className="container-form singn-in">
            <form className='formulario'>
        <h2 className='create-account'>Iniciar Sesion</h2>
        <div className='iconos'>
            <div className='border-icon'>
            <box-icon name='redux' type='logo' ></box-icon>
            </div>
            <div className='border-icon'>
            <box-icon name='react' type='logo' ></box-icon>
            </div>
            <div className='border-icon'>
            <box-icon type='logo' name='mongodb'></box-icon>
            </div>
        </div>
            <p className='cuenta-gratis'>¿Aun no tienes Cuenta?</p>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='contraseña'/>
            <input type="button" value="IniciarSesion" />
        
    </form>
    <div className="welcome-back">
        <div className="message">
            <h2>Bienvenido de nuevo</h2>
            <p>Sin no tienes cuenta registrate</p>
            <NavLink to="/registrarse">
            <button className='singn-in-btn'>Registrarse</button>
            </NavLink>
        </div>
    </div>

    </div>
    );
}
 
export default Ingresar;