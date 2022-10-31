import './App.css';
import NavBar from './components/NavBar.jsx';

function App() {

  let title = "Bienvenidos a mi app"
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
