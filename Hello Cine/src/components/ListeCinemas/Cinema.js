import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import './Cinema.css'
function Cinema({ villeSelect, getSalleFunction }) {

    const [cinemas, setCinemas] = useState()
    useEffect(() => {
        if (villeSelect != null) {
            axios.get(villeSelect.toString()).then(resp => {
                setCinemas(resp.data._embedded.cinemas)
            })
        }
    }, [villeSelect])
    return (
        <div >
            <h2 className="m-5">Sélectionner votre cinéma:</h2>
            <ul className="flex gap-1">
                {cinemas ? cinemas.map(cine => <li key={cine.id} className="p-3 border-2 border-blue-700 hover:bg-blue-300 rounded focus:ring-2 focus:ring-blue-600 rounded cursor-pointer" onClick={() => getSalleFunction(cine)} > {cine.name}</li>) : <div>Click on a City</div>
}   
            </ul>
        </div >
    )
}

export default Cinema
