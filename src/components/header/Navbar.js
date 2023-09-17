import React from 'react'
import "./style.scss";
import {
    BsCart4,

} from "react-icons/bs";

import { FaSignInAlt } from "react-icons/fa"
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="navbar" >
                <div className="logo" onClick={() => navigate("/")}>
                    <div className="name">
                        RQue
                    </div>
                    <div className="img">
                        <img src={logo} alt="Logo" />
                    </div>

                </div>

                <div className="cartandsign">
                    <div className="html" onClick={() => navigate("/question/html")}>
                        HTML
                    </div>
                    <div className="css" onClick={() => navigate("/question/css")}>
                        CSS
                    </div>
                    <div className="javaScript" onClick={()=>navigate("/question/js")}>
                        JS
                    </div>
                    <div className="react" onClick={() => navigate("/question/react")}>
                        React
                    </div>
                    <div className="java" onClick={() => navigate("/question/java")}>
                        JAVA
                    </div>


                    {/* <div className="singin">
                        <FaSignInAlt /> &nbsp;  Sign in
                    </div>

                    <div className="signup">
                        Sign up
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Navbar