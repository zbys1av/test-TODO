import React, {useState} from "react";

function Header(){

    const [scroll, setScroll] = useState("")

    function handleScroll(){
        if(window.scrollY >= 100){
            setScroll("header__scroll")
        } else { 
            setScroll("")
        }
    }
    window.addEventListener('scroll', handleScroll);

    return (
        <div className="header">
            <div className="header__box">
                <h3 className={`header__title ${scroll}`}>
                    Todo list
                </h3>
            </div>
        </div>
    )
}

export default Header;