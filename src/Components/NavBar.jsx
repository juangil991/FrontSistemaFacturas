import React from 'react'


const NavBar = () => {
    return (<>
        <nav class="navbar is-black" >  
                <div class="tabs is-centered is-boxed is-medium">
                    <ul>
                        <li class="is-active">
                            <a>
                                <span class="icon is-small"><i class="fas fa-cart-plus" aria-hidden="true"></i></span>
                                <span>Venta</span>
                            </a>
                        </li>
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
                                <span>Historial</span>
                            </a>
                        </li>
                    </ul>
                </div>    
        </nav>
    </>);
}

export default NavBar;