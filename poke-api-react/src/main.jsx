import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PokemonList from "./pages/pokemon/list/PokemonList";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'antd/dist/antd.css';
import PokemonDetail from "./pages/pokemon/detail/PokemonDetail"; // or 'antd/dist/antd.less'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/poke-list" />}/>
                <Route path="/poke-list" element={<PokemonList/>}/>
                <Route path="/poke-detail/:id" element={<PokemonDetail/>}/>}/>
                <Route path="*" element={
                    <div>
                        <h1>Todavia no se ha implementado nada para esta zona ruta. :(</h1>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
