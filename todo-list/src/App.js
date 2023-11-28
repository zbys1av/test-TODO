//Importing components
import Header from './Components/Header';
import Form from './Components/Form';
import Tests from './Components/Tests';
import Test from './Components/Test';

//All components that should to be rendered in our APP
function App() {
  return (
    <div className='body'>
      <div className="container">
        <Header/>
        <Form/>
        <Tests/>
      </div>
    </div>
    
  );
}

export default App;
