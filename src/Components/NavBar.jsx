import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (<>
        <nav class="navbar is-black" >
            <div class="tabs is-centered is-boxed is-medium">
                <ul>
                    <NavLink style={{color:'white'}} to="/productos">
                        <li>
                            <a>
                                <span class="icon is-small"><i class="fas fa-cart-plus" aria-hidden="true"></i></span>
                                <span>Venta</span>
                            </a>
                        </li>
                    </NavLink>
                    <li>
                        <a>
                            <span class="icon is-small"><i class="fas fa-basket-shopping" aria-hidden="true"></i></span>
                            <span>Productos</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><i class="fas fa-shop" aria-hidden="true"></i></span>
                            <span>Proovedores</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                            <span>Facturas</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                            <span>Volantes</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}

export default NavBar;