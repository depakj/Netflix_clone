import React, { useEffect } from "react";
import "./App.css"
import { login , logout ,selectUser } from "./features/userSlice";
import HomeScreen from "./HomeScreen";
import Login from "./login";
import { auth } from "./firebase";
import { Provider, useDispatch, useSelector } from 'react-redux';
import {Routes, Route} from 'react-router-dom';




function App(){
  
  //   const user = useSelector(selectUser);
  // console.log(user);
  //   const dispatch =  useDispatch();
  //  useEffect(()=>{
  //    const unsubscribe = auth.onAuthStateChanged(user=>
  //     {
  //       if(user)
  //       {
  //          dispatch(login({
  //            uid: user.uid,
  //            email: user.email,
  //          }))
  //       }
  //       else{
  //          dispatch(logout)
  //       }
  //     })
  //     return unsubscribe;
  //  },[])

  return(

    
    <div className="App">
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/home' element={<HomeScreen/>}/>
          </Routes>  
    </div>
    
  
    
  );
}

export default App;
