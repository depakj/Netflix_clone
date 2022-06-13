import React, { useState } from "react";
import "./login.css"
import SignUpScreen from "./SignUpScreen";
import {Link} from 'react-router-dom';

function Login(){

    const [signIn,setSignIn] = useState(false);
    const ShowSignUp = (e) =>
    {
        e.preventDefault();
        setSignIn(true);
    }

    return(
        

        <div className="login">
            <div className="login__header">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix" className="login__logo"/>

                {/* <button className="login__button">Sign In</button> */}
            </div>

            <div className="login__body">
                 
                 {/* {
                    signIn ? (<SignUpScreen/>) : 
                   (
                       <> */}
                        
                           <h1>Unlimited movies, TV shows and more.</h1>
                           <h2>Watch anywhere. Cancel anytime.</h2>
                           <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
         
                           <form className="login__form" onSubmit={ShowSignUp}>
                             <input type="text" placeholder="Email Address"/>
                             <Link to='/home'>
                             <button>Get Started</button>
                             </Link>
                           </form>
                      {/* </>

                    ) 
                 } */}
            </div>

            <div className="login__gradiant"></div>
        </div>
    )
}

export default Login;