import React, { useState } from "react";

function Crud(){

    const [list, setList] = useState()

    function handleSubmit(e){
        const task = e.target.elements.task.value 
        const newList = {
            id: 1,
            task: ""
        }
        setList(prevList => {
            return prevList.contact()
        })
    }

    return(
        <div className="crud">
            <div className="crud__box">
            <p className="crud__title">My tasks:</p>
            <form className="crud__form" onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add task here" className="crud__form-inp"></input>
                <button type="submit" className="crud__add button ">Add</button>
            </form>
            </div>
        </div>
    )
}

export default Crud;