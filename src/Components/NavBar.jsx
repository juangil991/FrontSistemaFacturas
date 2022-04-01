import React from 'react'


const NavBar = () => {
    return (<>
        <nav class="navbar  navbar-dark bg-dark fixed-top" >
            <div class="container-fluid" id='Font1'>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand">SISTEMA DE FACTURACION</a>
            </div>
        </nav>

    </>);
}

export default NavBar;