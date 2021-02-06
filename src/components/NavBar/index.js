import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./NavBar.css";

function NavBar () {
    const [show, setshow] = useState(false);
    const histroy = useHistory();
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setshow(true);
        } else {
            setshow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`navBar ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img onClick={() => histroy.push("/")} className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="site logo" />
                <img onClick={() => histroy.push("/profile")} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>


        </div>
    )
}

export default NavBar
