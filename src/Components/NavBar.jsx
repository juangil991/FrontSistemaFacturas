import React from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import ProductoMenuInventario from '../Actions/Producto/productosMenuAction'
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
    const dispatch = useDispatch();
    return (<>
      
        <nav class="navbar is-black" >
            <div class="tabs is-centered is-boxed is-medium">
            <div class="table-responsive">
                <ul>
                    <NavLink style={{color:'white'}} id="RouterNavLink" to="/Venta">
                        <li>
                            <a>
                                <span class="icon is-small"><i class="fas fa-cart-plus" aria-hidden="true"></i></span>
                                <span>Venta</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink style={{color:'white'}} id="RouterNavLink" to="/productos2">
                    <li>
                        <a    onClick={()=>{
                                dispatch(props.ProductoMenuInventario("menu"))
                            }}>
                            <span class="icon is-small"><i class="fas fa-basket-shopping" aria-hidden="true"></i></span>
                            <span>Productos</span>
                        </a>
                    </li>
                    </NavLink>
                    <NavLink style={{color:'white'}} id="RouterNavLink" to="/provedor">
                    <li>
                        <a>
                            <span class="icon is-small"><i class="fas fa-shop" aria-hidden="true"></i></span>
                            <span>Proovedores</span>
                        </a>
                    </li>
                    </NavLink>
                    <NavLink style={{color:'white'}} id="RouterNavLink" to="/productos">
                    <li>
                        <a>
                            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                            <span>Facturas</span>
                        </a>
                    </li>
                    </NavLink>
                    <NavLink style={{color:'white'}} id="RouterNavLink" to="/productos">
                    <li>
                        <a>
                            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                            <span>Volantes</span>
                        </a>
                    </li>
                    </NavLink>
                </ul>
                </div>
            </div>
        </nav>
    </>);
}

const stateMapToPros = state => {
    return {

    }
}
const mapDispatchToProps = () => ({
  ProductoMenuInventario})

export default connect(stateMapToPros,mapDispatchToProps)(NavBar)