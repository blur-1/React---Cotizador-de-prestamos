import React,{ useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


function App() {

  const[cantidad, setCantidad]=useState(0);
  const[plazo, setPlazo]=useState('');
  const [total, setTotal] = useState(0);
  const[spinner, setSpinner] = useState(false);

  let component;
  if(spinner){
    component = <Spinner/>;
  }else if(total === 0){
    component = <Mensaje/>
  }else{
    component = <Resultado
                total={total}
                plazo={plazo}
                cantidad={cantidad}
                />
  }


  return (
    <>
      <Header
      titulo="Cotizador de Prestamos"
      />

      <div className="container">
        <Formulario
        cantidad = {cantidad}
        setCantidad = {setCantidad}
        plazo={plazo}
        setPlazo={setPlazo}
        total={total}
        setTotal={setTotal}
        setSpinner={setSpinner}
        />
        <div className="mensajes">
          {component}
        </div>
      </div>
    </>
  );
}

export default App;
