import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from "./components/Footer"
import Tlist from "./components/Tlist"
import ContactCard from "./components/conactCard"
//import TodoItem from "./components/TodoItem"

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
   
      <Tlist/>
      <Tlist/>
      <Tlist/>
      
      <Tlist/>
      <Tlist/>
      <Tlist/>

      
      <Tlist/>
      <Tlist/>
      <Tlist/>
      
      <Tlist/>
      <Tlist/>
      <Tlist/>


            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
      
      

      <Footer />
    
    </div>    
  );
}

export default App;
