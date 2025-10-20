import "./App.css";
import ListaDeTarea from "./componentes/ListaDeTarea";

function App() {
  return (
    <div className="App">
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTarea />
      </div>
    </div>
  );
}

export default App;
