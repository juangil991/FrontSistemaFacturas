import React, {useState} from 'react';
import Registrarse from "../Components/Registrarse"
import Ingresar from "../Components/Ingresar"

import 'boxicons';

const AppContainer = () => {

    const[active,setActive]= useState(false);

    return (
        <> 
            <NavBar/>
        </>
    );
}
 
export default LoginContainer;