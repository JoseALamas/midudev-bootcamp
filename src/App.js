import './App.css';
import Mensaje from './mensaje';



const Description = () => {
  return <p>Esta es la app del curso Fullstack bootcamp</p>
}



function App() {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='red' message='En un curso'/>
      <Mensaje color='yellow' message='De React'/>
      <Description/>
    </div>
  );
}

export default App;
