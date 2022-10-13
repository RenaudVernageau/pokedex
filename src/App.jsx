import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Les pokémons</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokémon</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
