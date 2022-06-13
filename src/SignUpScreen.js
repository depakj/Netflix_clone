import React, { useRef } from "react";
import { auth  } from "./firebase";
import { Link } from "react-router-dom";

import "./login.css";
import "./SignUpScreen";

function SignUpScreen ()
{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register=(e)=>{
        e.preventDeafault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser=>{
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })
        
    }


    // const signIn=(e)=>{
    //     e.preventDeafault();

    //     auth.signInUserWithEmailAndPassword(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //     ).then(authUser=>{
    //         console.log(authUser)
    //     }).catch(error=>{
    //         alert(error.message)
    //     })
    //}
    

    return(
        <div className="SignUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type = "email" placeholder="Email"/>
                <input ref={passwordRef} type = "password" placeholder="Password"/>
                <Link to='/home'>
                   <button>Sign In</button>
                </Link>

                <h4>New to Netflix <span onClick={register}> Sign Up Now.</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen;