import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Todo(props){

    const {id} = useParams();   // to get value from .../todo/ID 
    let navigate  = useNavigate();
    const [details, setDetails] = useState();

    useEffect(function(){
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []); 

    const {todo} = props;
    const {id: todoId, userID, title, completed} = details || {};

    return(
        <div className="todo">
            <div className="todo__box">
                <p onClick={() => navigate(`/`)}  className="todo__back button">&#x25c0;  Back</p>
                {details ? (
                        <div className="todo__task">
                            <h3 className="todo__title">{title}</h3>
                            <p className="todo__completed">{`${completed ? "completed" : "not completed"}`}</p>
                        </div> 
                    ) : <p>loading...</p>} 
            </div>
        </div>
    )
}

export default Todo;