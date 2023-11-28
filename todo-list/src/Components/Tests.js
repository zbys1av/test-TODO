import React, {useState, useEffect} from "react";
import Test from "./Test";

function Tests(){

    const [todos, setTodos] = useState({})

    useEffect(function() {                      // to avoid infinite loop we need to use side effect with 2 parameters
        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        // .then(data => setTodos(data));
    }, [])  // we add dependansies array that "limits" our updates (if array changes it couses our funcion to run)
            // we can add some value into -> [] <- so it will watch if that value changed and it will run our function in case it was changed

    return(
        <div className="test">
        </div>
    )
}

export default Tests;

