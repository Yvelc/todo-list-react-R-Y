import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from "./components/Footer"

function App() {
  return (
  <div className="text-center bg-indigo-300 min-h-screen flex flex-col items-center justify-center text-teal-100
  sm:text-xs
  md:text-tiny 
  lg:text-lg 
  xl:text-2xl 
  x2:text-4xl 
  x3:text-5xl 
  x4:text-6xl"> {/* className="App" */} 
      
      <Header />
      <MainContent />
      <Footer />
    
    </div>    
  );
}

export default App;
