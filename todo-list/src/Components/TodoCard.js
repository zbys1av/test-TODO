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
        <div onClick={() => navigate(`/todo/${id}`)} className="todos__card">
            <p className="todos__number">{id}</p>
            <h3 style={completed ? style : {}} className="todos__task">{title}</h3>
            <p className="todos__completed">{`${completed ? "completed" : "not completed"}`}</p>
        </div>
    )
}

export default TodoCard;