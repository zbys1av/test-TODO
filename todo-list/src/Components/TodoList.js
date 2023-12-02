import React from 'react';
import Todo1 from './Todo1';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
            <ul className="todo__list">
                {filteredTodos.map(todo => (
                    <Todo1  
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