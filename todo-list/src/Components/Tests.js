import React, {useState, useEffect} from "react";
import Test from "./Test";

function Tests(){

    const [tasks, setTasks] = useState({})
    const [test, setTest] = useState({
        id: "",
        todo: "",
        completed: false
    })
    const [count, setCount] = useState(1)

    useEffect(function() {                      // to avoid infinite loop we need to use side effect with 2 parameters
        fetch(`https://dummyjson.com/todos/`)
        .then(res => res.json())
        .then(data => setTasks(data));
    }, [count])  // we add dependansies array that "limits" our updates (if array changes it couses our funcion to run)
            // we can add some value into -> [] <- so it will watch if that value changed and it will run our function in case it was changed

    function click(){
        setTasks(item => console.log(item));
        setCount(num => num + 1);
        console.log(count);
    }

    // const testElements = setTodos.map(item => item)
    // console.log(testElements)

    return(
        <div onClick={click} className="test">
            {JSON.stringify(tasks)}
        </div>
    )
}

export default Tests;

