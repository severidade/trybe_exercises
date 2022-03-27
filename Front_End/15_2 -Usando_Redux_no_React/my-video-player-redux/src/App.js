import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import categories from './data/data_filmes'

function App() {
  return (
    <div className="App">
      <h1>Meu app</h1>
      < Sidebar categories= { categories }/>
      < Player />
    </div>
  );
}

export default App;
