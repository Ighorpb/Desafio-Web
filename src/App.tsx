import { Home } from "./Screens/Home"
import { Cadastro } from "./Screens/Cadastro";
import { Details } from "./Screens/Detalhes";

import {
  BrowserRouter,
  Route,
  Link, 
  Routes
} from 'react-router-dom'

import './App.css'

export function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Compromissos</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/detalhes/:id" element={<Details  />} />
      </Routes>
    </BrowserRouter>
  );
};


