import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {

  return (
    <div className="App">
      <Mensaje color='red' msg='Estamos trabajando ' />
      <Mensaje color='green' msg='en un curso '/>
      <Mensaje color='yellow' msg='de React'/>
      <Description />
    </div>
  );
}

export default App;
