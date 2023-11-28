import React, {useState} from "react";
import Tests from "./Tests";

function Test(props){

    return(
        <div className="test">
            <p>{props.id}</p>
            <p>{props.todo}</p>
        </div>
    )
}

export default Test;

