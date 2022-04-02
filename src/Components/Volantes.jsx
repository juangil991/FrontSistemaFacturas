import React from 'react'

const VolantesComponent = () => {
    return (<>
            <div class="table-container">
            <table class="table is-fullwidth">
                <tbody className='has-background-link-dark'> 
                <tr>
                    <td style={{ color: "white" }}>Nombre Cliente</td>
                    <td><input class="input is-primary" type="text" /></td>
                    <td></td>
                </tr>  
                <tr>
                    <td style={{ color: "white" }}>Documento Cliente</td>
                    <td><input class="input is-primary" type="text" /></td>
                    <td></td>
                </tr>  
                <tr>
                    <td style={{ color: "white" }}>Nombre Cajero</td>
                    <td><input class="input is-primary" type="text" /></td>
                    <td></td>
                </tr>  
                <tr>
                    <td style={{ color: "white" }}>Productos</td>
                    <td><input class="input is-primary" type="text" />
                    <button className="button is-primary" style={{top:'5px'}} >Añadir Producto</button>
                    </td>
                    <td><input class="input is-primary" type="text" />
                    <tr>Cantidad</tr>
                    </td>
                    
                </tr>
                <tr>
                    <td style={{ color: "white" }}>Fecha</td>
                    <td><input class="input is-primary" type="date" /></td>
                    <td></td>
                </tr>  
                <tr>
                    <td style={{ color: "white" }}>Total</td>
                    <td><input class="input is-primary" type="text" /></td>
                    <td></td>
                </tr> 
                <tr>
                    <td>
                <button className="button is-dark" >Crear Factura</button>

                    </td>
        <td>

                <button className="button is-dark" >Cancelar</button>
        </td>
                <td>

                
                </td>
                </tr>          
                </tbody>
            </table>
        </div>
    
    
    
    </>  );
}
 
export default VolantesComponent;