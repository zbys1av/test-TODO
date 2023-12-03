import React from 'react';

function Todo ({text, todos, setTodos, todo}){
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <div className='todo__box'>
                <li className={`todo__item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <div className="todo__buttons">
                    <button onClick={completeHandler} className={`todo__complete button ${todo.completed ? "button-comp" : ""}`}>Complete</button>
                    <button onClick={deleteHandler} className="todo__delete button">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;