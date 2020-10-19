import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import firebaseContext from './Context'

let isPassOk = false
let saveOk = false

const SignUp = (props) => {

    const firebase = useContext(firebaseContext)

    const data = {
        pseudo: "",
        email: "",
        password: "",
        confPassword: "toto"
    }
    const [loginData, setloginData] = useState(data)

    const [error, setError] = useState('')

    //gestion du formulaire
    const donnePseudo = (e) => {
        const pseudo = e.target.value
        setloginData({ ...loginData, pseudo })
    }
    const donneEmail = (e) => {
        const email = e.target.value
        setloginData({ ...loginData, email })
    }
    const donnePassword = (e) => {
        isPassOk = false
        const password = e.target.value
        setloginData({ ...loginData, password })
    }
    const donneConfPass = (e) => {
        isPassOk = false
        const confPassword = e.target.value
        setloginData({ ...loginData, confPassword })
    }


    //gestion de l'authentification
    const submitForm = (e) => {
        e.preventDefault()
        firebase.signUpUser(loginData.email, loginData.password)
            .then(user => {
                setloginData({...data})
                props.history.push('/welcome')
            })
            .catch(error => {
                setError(error)
            })
    }

    //Validation du formulaire
    if (loginData.password === loginData.confPassword && loginData.pseudo !== "" & loginData.email !== "") isPassOk = true;

    //gestion error
    const errorMess = error!=="" ? <span>{error.message}</span> : <p></p>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMess}
                        <h2>Inscription</h2>
                        <form onSubmit={submitForm}>
                            <div className="inputBox">
                                <input onChange={donnePseudo} type="text" id="pseudo" required autoComplete="off" />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={donneEmail} type="email" id="email" required autoComplete="off" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={donnePassword} type="password" id="password" required autoComplete="off" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={donneConfPass} type="password" id="confPassword" required autoComplete="off" />
                                <label htmlFor="confPassword">Confirm Password</label>
                            </div>
                            {isPassOk ? <button >Valider</button> : <button disabled >Valider</button>}
                        </form>
                       <div className="linkContainer">
                           <Link className="sinmpleLink" to="/login"> Deja inscrit</Link>
                       </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SignUp
