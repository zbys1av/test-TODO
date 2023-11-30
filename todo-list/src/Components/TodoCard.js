import React from "react";
import {useNavigate} from "react-router-dom";

function TodoCard(props){
    let navigate  = useNavigate();
    const {todo} = props;
    const {id, title, completed} = todo;

    const style = {
        textDecoration: "line-through",
    }

    return (
        <div className="todos__card">
            <div className="todos__buttons-section">
                <p className="todos__number">{id}</p>
                <div className="todos__buttons">
                    <p onClick={() => navigate(`/todo/${id}`)}  className="todos__check button">Check</p>
                    <p className="todos__placeholder button">Edit</p>
                    <p className="todos__placeholder button">Delete</p>
                </div>
            </div>
            <div className="todos__info">
                <h3 style={completed ? style : {}} className="todos__task">{title}</h3>
                <p className="todos__completed">{`${completed ? "completed" : "not completed"}`}</p>
            </div>
        </div>
    )
}

export default TodoCard;