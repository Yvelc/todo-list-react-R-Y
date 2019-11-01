import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from "./components/Footer"
import Tlist from "./components/Tlist"
import ContactCard from "./components/conactCard"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }}
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange}/>)
  return (
  <div className="text-center bg-indigo-300 min-h-screen flex flex-col items-center justify-center text-teal-500
  sm:text-xs
  md:text-tiny 
  lg:text-lg 
  xl:text-2xl 
  x2:text-4xl 
  x3:text-5xl 
  x4:text-6xl"> { TodoItem} 
   
      <Header />
      <MainContent />
      {todoItems}
    
      <Footer />
    
    </div>    
  );
}
}

export default App;
