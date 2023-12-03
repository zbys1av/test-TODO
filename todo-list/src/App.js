//Importing components
import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Todos from './Components/Todos';
import Todo from './Components/Todo';
import TodoList from "./Components/TodoList"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <Header/>
        {/* CUSTOM SECTION */}
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList 
          filteredTodos={filteredTodos}
          setTodos={setTodos} 
          todos={todos}
        />
        {/* API SECTION */}
        <Router>
          <Routes>
            {/* HOME PAGE */}
            <Route path='/' element={<Todos/>}/>    
            {/* LETTING PROGRAM TO KNOW WHAT PAGE WE WANT TO ACCESS */}
            <Route path='/todo/:id' element={<Todo/>}/>
          </Routes>
        </Router>
        <footer className="footer">
          <p className="footer__text">made by <a className='footer__link' target="_blank" href="https://github.com/zbys1av">zbs1v</a></p>
          <p className="footer__year">dec 2023</p>
        </footer>
      </div>
    </div>
  );
}

export default App;