import React from 'react'
import './login.css'
import {loginUrl} from './spotify'

function Login() {
    return (
        <div className="login">
            <img className="login__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyj95u2RcNBFAw7Mo84WlBDodazutsvhjDfQ&usqp=CAU" alt=""/>
            <a className="login__a" href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
