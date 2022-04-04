import React from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons'


const Registrarse = (props) => {
    return (<>
        <div className="container-form1 singn-up1">
            <div className="welcome-back1">
                <div className="message1">
                    <h2>BIENVENDIDO AL SISTEMA DE FACTURAS</h2>
                    <p>Inicia sesion si ya tienes una cuenta</p>
                    <NavLink to="/ingresar">
                        <button className='singn-up-btn1'>Iniciar Sesion</button>
                    </NavLink>
                </div>
            </div>
            <form className='formulario1'>
                <h2 className='create-account1'>CREAR CUENTA</h2>
                <div class="iconos1">
                    <div class="border-icon1">
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="border-icon1">
                        <i class="fa-brands fa-google"></i>
                    </div>
                    <div class="border-icon1">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <p className='cuenta-gratis1'>Ingresa tus datos</p>
                <input type="text" placeholder='Nombre' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='contraseña' />
                <span>Minimo 6 cararcteres</span>
                <input type="button" value="Registrarse" />
            </form>
        </div>
    </>);
}

export default Registrarse;