//Importing components
import React, {useState, useEffect} from 'react';

import Header from './Components/Header';
import Form from './Components/Form';

import Todos from './Components/Todos';
import Todo from './Components/Todo';
import Crud from './Components/Crud';

// import Form1 from "./Components/Form1"
import TodoList from "./Components/TodoList"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Switch from "react-switch";

//All components that should to be rendered in our APP
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
        <Router>
          <Routes>
            {/* HOME PAGE */}
            <Route path='/' element={<Todos/>}/>    
            {/* LETTING PROGRAM TO KNOW WHAT WE WANT TO ACCESS */}
            <Route path='/todo/:id' element={<Todo/>}/>
          </Routes>
        </Router>
      </div>
    </div>



    // <div className='body'>
    //   <div className="container">
    //     <Header/>
    //     {/* <Crud/> */}
    //     <Form/>
    //     <Router>
    //       <Routes>
    //         {/* HOME PAGE */}
    //         <Route path='/' element={<Todos/>}/>    
    //         {/* LETTING PROGRAM TO KNOW WHAT WE WANT TO ACCESS */}
    //         <Route path='/todo/:id' element={<Todo/>}/>
    //       </Routes>
    //     </Router>
    //   </div>
    // </div>
    
  );
}

export default App;
