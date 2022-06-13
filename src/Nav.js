import React, { useEffect } from "react";
import "./nav.css";
import { useState } from "react";
import firebase from "firebase";

function Nav()
{
    return(
        <div className = "nav">
            <div className="nav__content">
              <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"className="logo" alt="Netflix"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" onClick={()=>firebase.auth().signOut()} className="nav_avatar" alt="Avatar"/>
            </div>
          
        </div>
    )
}

export default Nav;