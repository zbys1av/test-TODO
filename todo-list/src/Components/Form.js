import React from "react";

function Form(){
    return(
        <div className="form">
            <div className="form__box">
                <input className="form__input input" type="text"/>
                <button className="form__button button" type="submit">
                    <i className="from__plus">+</i>
                </button>
                <div className="form__select-section">
                    <select className="form__select select" name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Form;