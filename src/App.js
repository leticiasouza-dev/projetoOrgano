import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([]) // meu estado receberá um array

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => setColaboradores(...colaboradores, colaborador)}/>{/*passando paro o meu set que vou receber os antigos colaboradores e os novos  */}

    </div>
    
  );
}



export default App;
