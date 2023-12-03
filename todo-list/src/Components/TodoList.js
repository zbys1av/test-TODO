import React from 'react';
import MyTodo from './MyTodo';

function TodoList({todos, setTodos, filteredTodos}){
    return(
            <ul className="todo__list">
                {filteredTodos.map(todo => (
                    <MyTodo
                        setTodos={setTodos} 
                        todo={todo} 
                        todos={todos} 
                        key={todo.id} 
                        text={todo.text}
                    />
                ))}
            </ul>
    );
}

export default TodoList;