import React from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useState } from 'react'


function Login() {
    // utiliser pour la redirection useHistory : history.push('/')
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in redirect home
                history.push('/')
            })
            .catch((e) => alert(e.message));
    };
    

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //created a user and logged in
                history.push('/')

            })
            .catch((e)=> alert(e.message))

    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png" alt="amazon logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>En continuant, vous acceptez les conditions d'utilisation et la notice Protection de vos informations personnelles d'Amazon.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login 
