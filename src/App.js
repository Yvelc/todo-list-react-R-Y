import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-red-600">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul className="list-decimal"> {/* colocar "App-textDec" y descomentar la clase en el Amm.css para hacer lo mismo con Css aca esta con tailwind */}
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </header>
    </div>    
  );
}

export default App;
