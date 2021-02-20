import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import RegisterTime from './pages/registerTime';
import Release from './pages/release';
import Navbar from '../src/components/nav_bar/Navbar'

function Routes(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Route path="/" exact component={Landing}/>
            <Route path="/lancamentos" component={Release}/>
            <Route path="/registrar" component={RegisterTime}/>
        </BrowserRouter>
    );
}

export default Routes;