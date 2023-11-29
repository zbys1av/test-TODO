import React, {useEffect, useState} from "react";
import TodoCard from "./TodoCard";

function Todos(){

    const [todos, setTodos] = useState();

    useEffect(function(){
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);          // we have empty array to fetch data only once 

    // just to make length of our list not static
    let randomLength = todos ? Math.floor(Math.random() * todos.length) : "loading";

    return(
        <div className="todos">
            <div className="todos__box">
                <p className="todos__count">{`Tasks: ${randomLength}`}</p>
                
                {/* CHECKING IF "todos" WAS LOADED */}
                {todos ? (
                        <div className="todos__tasks">
                            {todos.slice(0, randomLength).map((todo) => (
                                <TodoCard
                                    todo={todo}
                                />
                            ))}
                        </div>
                    ) : <p>loading...</p>} 
            </div>
        </div>

    )
}

export default Todos;