import { Home } from "../Screens/Home";
import { Cadastro } from "../Screens/Cadastro";
import { Details } from "../Screens/Detalhes";
import { Route, Routes } from 'react-router-dom';

export function RoutesNav(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro/:id?/" element={<Cadastro />} />
            <Route path="/detalhes/:id/" element={<Details />} />
        </Routes>
    )
}

