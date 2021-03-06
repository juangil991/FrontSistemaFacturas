import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ingresar from "../Components/Ingresar";
import Registrarse from "../Components/Registrarse";
import NavBar from "../Components/NavBar";
import ProductoComponent from "../Components/Productos";
import VentaComponent from "../Components/Venta";
import ProductosDatatable from "../Components/Productos";
import Venta2 from "../Components/Venta";
import Volantes from "../Components/Volantes";
import HistorialFacturas from "../Components/HistorialFacturas";
import DetalleFactura from "../Components/DetalleFactura";
import HistorialVolantes from "../Components/HistorialVolantes";
import DetalleProvedor from "../Components/DetalleProvedor";
import { getAuth, onAuthStateChanged, GoogleAuthProvider,getRedirectResult,GithubAuthProvider } from "firebase/auth";
import { useState, useEffect} from "react";

export const RoutesPath = () => {
  
  const [validate,setValidate]=useState();

  const auth = getAuth();
  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
  
      const uid = user.uid;
      setValidate(true)
      // ...
    } else {
      setValidate(false)
    }
  });
  getRedirectResult(auth)
  .then((result) => {
    const credentialGit = GithubAuthProvider.credentialFromResult(result);
    if (credentialGit) {
      const tokenGit = credentialGit.accessToken;
      console.log("hola")
      setValidate(true)
    }
    const credentialGoogle = GoogleAuthProvider.credentialFromResult(result);
    
    const tokenGoogle = credentialGoogle.accessToken;
    const user = result.user;
    setValidate(true)
  }).catch((error) => { 
    const errorCode = error.code;
    const errorMessage = error.message; 
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    const credentialgit = GithubAuthProvider.credentialFromError(error);
    console.log(errorMessage)
    setValidate(false)
  });

},[])


  return ( <>
  
    <BrowserRouter>
      {validate&&<NavBar />}
      {validate&& <Routes>
        <Route path="/productos2" element={<ProductosDatatable/>}/>   
        <Route path="/1" element={<VentaComponent />} />
        <Route path="/facturas" element={<HistorialFacturas/>}/>
        <Route path="/" element={<Venta2 />} />
        <Route path="/detalleFactura" element={<DetalleFactura />} />
        <Route path="/productos" element={<ProductoComponent />} />
        <Route path="/provedor" element={<Volantes />}/>
        <Route path="/volantes" element={<HistorialVolantes/>}/>
        <Route path="/volante" element={<DetalleProvedor/>}/>
      </Routes> }
      {!validate &&<Routes>
         <Route path="/" element={<Ingresar />} />
         <Route path="/registrarse" element={<Registrarse />} /> 
        </Routes>

      }
    </BrowserRouter>

    </>
  );
};

export default RoutesPath;
