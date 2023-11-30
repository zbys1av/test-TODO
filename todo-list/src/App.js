//Importing components
import Header from './Components/Header';
import Form from './Components/Form';

import Todos from './Components/Todos';
import Todo from './Components/Todo';
import Crud from './Components/Crud';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Switch from "react-switch";

//All components that should to be rendered in our APP
function App() {
  return (
    <div className='body'>
      <div className="container">
        <Header/>
        {/* <Crud/> */}
        {/* <Form/> */}
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
    
  );
}

export default App;
