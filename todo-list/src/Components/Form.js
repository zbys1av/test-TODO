// import React from "react";

// function Form(){
//     return(
//         <div className="form">
//             <div className="form__box">
//                 <input className="form__input input" type="text"/>
//                 <button className="form__button button" type="submit">
//                     <i className="from__plus">+</i>
//                 </button>
//                 <div className="form__select-section">
//                     <select className="form__select select" name="todos">
//                         <option value="all">All</option>
//                         <option value="completed">Completed</option>
//                         <option value="uncompleted">Uncompleted</option>
//                     </select>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Form;


import React from 'react';


const Form = ({setInputText, todos, setTodos, inputText , setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText('');
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
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