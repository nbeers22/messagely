import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Navbar from './Navbar';

function App() {
    return (
        <div className="app-container">
            {/* <Navbar /> */}
            <Login />
        </div>
    );
}

export default App;


ReactDOM.render(<App />, document.getElementById('react-app'));
