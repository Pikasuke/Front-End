import React, { useState, useEffect } from 'react'
import axios from './Axios'
import './Ville.css'

function Ville() {
    const [villes, setvilles] = useState([])
        
    useEffect(() => {
        // axios.get('/villes').then(resp => {
        //     console.log(resp.data._embedded.villes)
        //     setvilles(resp.data._embedded.villes)
        // })
        setvilles(["paris","toulouse","marseille"])
    }, [])


    return ( 
        <div className="villes">
            {villes.map(v => <div className="ville">{v}</div>) }
        </div>
    )
}

export default Ville
