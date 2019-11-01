import React from "react"
import App from "C:/Users/Yvelc/Documents/Yvelc/Programacion/todo-list-react/src/App.js"
import { isTSTypeAliasDeclaration } from "@babel/types"

function TodoItem(props) {

    const completedStyle = {
        fontStyle: ".italic",
        color: "gray", 
        textDecoration: "line-through"
    }
    return (
        <div className="text-left 
        sm:text-xs
        md:text-tiny 
        lg:text-lg 
        xl:text-2xl 
        x2:text-4xl 
        x3:text-5xl 
        x4:text-6xl">
                  <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                 /> 
                 <imput style={props.item.completed ? completedStyle: null}>{props.item.text} 
                 </imput>
        </div>
    )
}

export default TodoItem