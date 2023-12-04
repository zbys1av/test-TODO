import React from "react";
import {useNavigate} from "react-router-dom";

function TodoCard(props){
    let navigate  = useNavigate();  //used to "navigate" between our main page and task page
    const {todo} = props;           //get data needed for our "task"
    const {id, title, completed} = todo;

    //apply styles to the task if it is "completed"
    const taskCompleted = {
        textDecoration: "line-through",
    }

    const taskStatus = {
        backgroundColor: completed ? "#4b993c" : "#ad4834",
    }

    return (
        <div className="todos__card">
            <div className="todos__buttons-section">
                <p className="todos__number">{id}</p>
                <div className="todos__buttons">
                    <p onClick={() => navigate(`/todo/${id}`)}  className="todos__check button">Check</p>
                </div>
            </div>
            <div className="todos__info">
                <h3 style={completed ? taskCompleted : {}} className="todos__task">{title}</h3>
                <p style={taskStatus} className="todos__completed">{`${completed ? "completed" : "not completed"}`}</p>
            </div>
        </div>
    )
}

export default TodoCard;