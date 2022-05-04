import React, { useState } from 'react'
import calcular from '../helpers/calcular';

const Formulario = ({cantidad, setCantidad, plazo, setPlazo, total, setTotal, setSpinner}) => {

    const[mensajeError, setMensajeError] = useState(false);
    
    const calcularPrestamo = (e)=>{
        e.preventDefault();

        if(cantidad === 0 || plazo === ''){
            setMensajeError(true);
            return;
        }
        setMensajeError(false);
        setSpinner(true)
        //loading spinner
        setTimeout(()=>{
            //cotiza
            const total = calcular(cantidad,plazo);
            setTotal(total);
            setSpinner(false)
        },3000);

       
    }

    return ( 
    <>
        <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input onChange={ (e) => setCantidad(e.target.value) } className="u-full-width" type="number" placeholder="Ejemplo: 3000"/>
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select onChange={ (e) => setPlazo(e.target.value) } className="u-full-width">
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div><input type="submit" value="Calcular" className="button-primary u-full-width" /></div>
                
                {(mensajeError)? 
                <p className="error">Completar todos los campos</p> 
                : null}
            </div>
        </form>  
    </> 
    );
}
export default Formulario;