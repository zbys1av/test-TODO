import React, {useState, useEffect} from "react";
import Test from "./Test";

// we need "react-router-dom"
// 

function Tests(){

    const [tasks, setTasks] = useState({})
    const [count, setCount] = useState(1)

    useEffect(function() {                      // to avoid infinite loop we need to use side effect with 2 parameters
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => res.json())
        .then(data => setTasks(data));
    }, [])  // we add dependansies array that "limits" our updates (if array changes it couses our funcion to run)
            // we can add some value into -> [] <- so it will watch if that value changed and it will run our function in case it was changed


            
    function click(){
        setCount(num => num + 1);
    }

    return(
        <div onClick={click} className="test">
            {JSON.stringify(tasks[1])}
        </div>
    )
}

export default Tests;

