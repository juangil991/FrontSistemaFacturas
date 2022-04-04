import React,{useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import "../Css/App.css" 
import 'boxicons'
import { signInWithEmailAndPassword, onAuthStateChanged,getAuth } from 'firebase/auth';
import { GoogleAuthProvider,signInWithRedirect,GithubAuthProvider  } from "firebase/auth";





const Ingresar = (props) => {

    const [user,setUser]=useState();
    const [loading, setLoading]=useState();
    const [error,setError]=useState("");
    const [pass,setPass]=useState();
    const [email,setEmail]=useState();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

    const auth = getAuth();

    const signInUser=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => console.log(res))
          .catch((err) => setError(err.code))
          .finally(() => setLoading(false));
    }
    useEffect(()=>{
        setLoading(true)
      const unsubscribe = onAuthStateChanged(auth,response=>{
            response? setUser(response):setUser(null)
            setError("");
            setLoading(false);
        })
        return unsubscribe;
    },[])

    return (<div className="container-form1 singn-in1">
            <form className='formulario1'>
        <h2 className='create-account1'>Iniciar Sesion</h2>
        <div class="iconos1">
                    <div class="border-icon1" onClick={()=>{
                        signInWithRedirect(auth, githubProvider);
                    }}>
                        <i class="fa-brands fa-github"
                      
                        ></i>
                    </div>
                    <div class="border-icon1" onClick={()=>{
                        signInWithRedirect(auth, googleProvider);
                    }}>
                        <i class="fa-brands fa-google"
                       
                        ></i>
                    </div>
                    <div class="border-icon1">
                        <i class="fa-brands fa-facebook"
                        
                        ></i>
                    </div>
                </div>
            <p className='cuenta-gratis1'>¿Aun no tienes Cuenta?</p>
            <input type="email" placeholder='Email'
            onChange={(e)=>{
                setEmail( e.target.value)
                console.log(auth)
            }}
            />
            <input type="password" placeholder='contraseña'
            onChange={(e)=>{
                setPass( e.target.value)
            }}
            />
            <input type="button" value="IniciarSesion" 
            onClick={()=>{
                signInUser(email,pass)
            }}
            
            />
        
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