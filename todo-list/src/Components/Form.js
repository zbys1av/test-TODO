import React from 'react';

function Form ({setInputText, todos, setTodos, inputText , setStatus}){

    //get value from input
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    //submit data from input
    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText('');
    };

    //get status of our "task"
    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return(
        <div className="form">
            <div className="form__box">
                <form className="form__form">
                    <div className='form__add-task'>
                        <input placeholder="Add task here" value={inputText} onChange={inputTextHandler} type="text" className="form__input input" />
                        <button onClick={submitTodoHandler} className="form__button button" type="submit">Add</button>
                    </div>
                    <div className="form__select-section">
                        <select onChange={statusHandler} name="todos" className="form__select select">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;