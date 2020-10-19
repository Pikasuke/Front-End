import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import firebaseContext from './Context'

const Login = (props) => {
    let isPassOk = false
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const firebase = useContext(firebaseContext)

    const donneEmail = (e) => {
        setEmail(e.target.value)
    }


    const submitForm = (e) => {
        e.preventDefault()

        firebase.loginUser(email, password)
            .then(user => {
                props.history.push('/welcome')
            })
            .catch(error => {
                setEmail('')
                setPassword('')
                setError(error)
            })
    }

    const errorMess = error !== "" ? <span>{error.message}</span> : <p></p>

    if (email !== "" && password !== "" && password.length>5) isPassOk = true

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMess}
                        <h2>Connexion</h2>
                        <form onSubmit={submitForm}>

                            <div className="inputBox">
                                <input onChange={donneEmail} type="email" id="email" required autoComplete="off" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" required autoComplete="off" />
                                <label htmlFor="password">Password</label>
                            </div>

                            {isPassOk ? <button >Valider</button> : <button disabled >Valider</button>}
                        </form>
                        <div className="linkContainer">
                            <Link className="sinmpleLink" to="/signup"> Inscription ?</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
