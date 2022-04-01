import React, {useState} from 'react';
import Registrarse from "../Components/Registrarse"
import Ingresar from "../Components/Ingresar"

import 'boxicons';

const LoginContainer = () => {
    const[active,setActive]= useState(false);
    return (
        <> 
        {active && <Registrarse />}
        {!active && <Ingresar/>}
        </>
    );
}
 
export default LoginContainer;