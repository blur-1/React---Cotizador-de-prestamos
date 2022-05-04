const Resultado = ({cantidad,total,plazo}) => {
    return ( 
        <>
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es : S/.{cantidad}</p>
            <p>El plazo a pagar es en: {plazo} meses</p>
            <p>Su pago mensual es de : {(total/plazo).toFixed(2)}</p>
            <p>Total a pagar : S/. {(total).toFixed(2)}</p>
        </div>
        </>
     );
}
 
export default Resultado;