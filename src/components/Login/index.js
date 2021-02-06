import React, { useState } from 'react'
import Signup from '../SignUp';
import "./login.css";

function LoginScreen () {
    const [signin, setSignin] = useState(false)
    return (
        <div className="loginScreen" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/loginbackground.jpg')` }}>
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src={`${process.env.PUBLIC_URL}/netflixLogo.png`} alt="" />
                <button onClick={() => setSignin(true)} className="loginscreen__button">Sign In</button>

                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
                {signin ? (
                    <Signup />
                ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere, cancel at any time.</h2>
                            <h3>Ready to Watch? Enter your email to create or restart your membership.</h3>

                            <div className="loginScreen__input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button onClick={() => setSignin(true)} className="loginScreen__getStarted">Get Started</button>
                                </form>
                            </div>
                        </>
                    )}

            </div>
        </div>
    )
}

export default LoginScreen
