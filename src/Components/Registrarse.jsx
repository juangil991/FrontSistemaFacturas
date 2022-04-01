import React from 'react';
import {NavLink} from 'react-router-dom';
import 'boxicons'


const Registrarse = (props) => {
    return (<div className="container-form singn-up">
    <div className="welcome-back">
        <div className="message">
            <h2>BIENVENDIDO AL SISTEMA DE FACTURAS</h2>
            <p>Inicia sesion si ya tienes una cuenta</p>
            <NavLink to="/ingresar">
            <button className='singn-up-btn'>Iniciar Sesion</button>
            </NavLink>
        </div>
    </div>
    <form className='formulario'>
        <h2 className='create-account'>Crear una cuenta</h2>
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
            <p className='cuenta-gratis'>Crear una cuenta gratis</p>
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='contraseña'/>
            <span>Minimo 6 cararcteres</span>
            <input type="button" value="Registrarse"/>
        
    </form>
    </div>);
}
 
export default Registrarse;