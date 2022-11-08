import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
      auth.onAuthStateChanged((userAuth) =>{
        if(userAuth){
            dispatch(login({

              email:userAuth.email,
              uid:userAuth.uid,
              displayName:userAuth.name,
              photoURL:userAuth.profilePic
            }
            ))
        }
        else{
            dispatch(logout());
        }
      })
  }, [])
  return (
    <div className="app">

        <Header/>

        {!user ? <Login/> : (
          <div className = "app_body">
                    <Sidebar/>
                    <Feed/>
          </div>
        
        )}


    </div>
  );
}

export default App;
