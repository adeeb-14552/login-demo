import React from 'react';


 const Login = (props) => {
     const {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError} = props;





    return (
        <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type="text" 
            autoFocus 
            required 
            value = {email} 
            onChange={(e) => setEmail(e.target.value)}></input>
            <p className="errorMsg">{emailError}</p>

            <label>Password</label>
            <input type="password"
            required
            value={password}
            onChange={(e) =>setPassword(e.target.value)}></input>
            <p className="errorMsg">{passwordError}</p>

            <label>Email</label>
            <input></input>

            <div className="btnContainer">
                {hasAccount ? (
                    <>
                        <button onClick = {handleLogin} >Log In</button>
                        <p>Don't have an account? 
                        <span onClick={ () => setHasAccount(!hasAccount)}>Sign Up</span></p>
                    </>

                ) : (

                    <>
                        <button onClick = {handleSignup} >Sign UP</button>
                        <p>Have an account? 
                        <span onClick = { () => setHasAccount(!hasAccount)}>Log In</span></p>
                    </>

                )}
            </div>
        </div>
            
        </section>
    )
}
export default Login;