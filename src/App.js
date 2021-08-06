import React,{useState,useEffect} from 'react';
import './App.css';
import fire from './fire';
import Login from './login';
import Homepage from './homepage';

const App = () => {
  const [user,setUser] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [emailError,setEmailError] =useState('')
  const [passwordError,setPasswordError] =useState('')
  const [hasAccount,setHasAccount] =useState('')

  //to clear the input fields in the box
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  // fuction to clear errors
  const clearError = () => {
    setEmailError('');
    setPasswordError('');

  }
  
  const handleLogin = () => {
    clearError();
    fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err => {
          switch(err.code){
            case "auth/invalid-email":
              case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
                  case "aut/wrong-password":
                    setPasswordError(err.message);
                    break;

          }
        });

  };


  const handleSignup = () => {
    fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err => {
          switch(err.code){
            case "auth/email-alreay-exist":
              case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
                  case "aut/weak-password":
                    setPasswordError(err.message);
                    break;

          }
        });

  };

  const handleLogout = () => {
    fire.auth().signOut();

  }
  
  //need a listner that checks wether the user exists or not
  const authListner = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else {
        setUser('');
      }
    });
  };

  useEffect (() => {
    authListner();

  }, [])


  return(
    <div className='App'>
    {user ? (
      <Homepage handleLogout = {handleLogout}/>
    ):(
      <Login 
      email={email} 
      setEmail={setEmail} 
      password={password}  
      setPassword={setPassword} 
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
    />      
    )}
    
    

    </div>
  )
}
export default App;