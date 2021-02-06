import React, { useRef, useState } from 'react'
import { auth } from '../../firebase_auth';
import "./Signup.css";

function Signup () {
    const [isSignup, setIsSignup] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((authuser) => {
                // console.log(authuser);

            }).catch(err => alert(err.message));
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authuser) => {

        }).catch(err => alert(err.message));
    }
    return (
        <div className="Signup">
            <form>
                <h1>{isSignup ? "Sign up" : "Sign In"}</h1>

                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={isSignup ? register : signIn} className="Singup__Button" type="submit">{isSignup ? "Sign up" : "Sign In"}</button>

                <h4><span className="singup__gray">New to Netflix? </span> <span className="signup__link" onClick={() => setIsSignup(true)}>Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default Signup
