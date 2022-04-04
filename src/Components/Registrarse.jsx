import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons'
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../Config/Firebase/FirebaseSDK";


const Registrarse = (props) => {
    const [user,setUser]=useState();
    const [loading, setLoading]=useState();
    const [error,setError]=useState("");
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();

    const registerUser =(email,name,password)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
           return updateProfile(auth.currentUser,{
                displayName:name
            })
        })
        .then(response=>console.log(response))
        .catch(e=>setError(e.message))
        .finally(()=>setLoading(false))

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
    return (<>
        <div className="container-form1 singn-up1">
            <div className="welcome-back1">
                <div className="message1">
                    <h2>BIENVENDIDO AL SISTEMA DE FACTURAS</h2>
                    <p>Inicia sesion si ya tienes una cuenta</p>
                    <NavLink to="/">
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
                <input type="text" placeholder='Nombre'
                 onChange={(e)=>{
                    setName( e.target.value)
                    console.log(user)
                }} />
                <input type="email" placeholder='Email' 
                    onChange={(e)=>{
                        setEmail( e.target.value)
                    }}/>
                <input type="password" placeholder='contraseña'
                onChange={(e)=>{
                    setPass( e.target.value)
                }}/>
                <span>Minimo 6 cararcteres</span>
                <NavLink to="/">
                <input type="button" value="Registrarse" 
                onClick={()=>{
                    registerUser(email,name,pass)
                }}/>
                </NavLink>
            </form>
        </div>
    </>);
}

export default Registrarse;