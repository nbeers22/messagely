import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Navbar from './Navbar';

import axios from 'axios';

function App() {

    function login ( user ) {

    }

    return (
        <div className="relative flex items-top justify-center min-h-screen sm:items-center py-4 sm:pt-0">
            <Navbar />
            <Login login={ login } />
            <Outlet />
        </div>
    );
}

export default App;
