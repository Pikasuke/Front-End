import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import Salle from "./Salle"

function ListeSalles({ cineSelect }) {
    const [salles, setSalles] = useState([])

    useEffect(() => {
        axios.get(cineSelect).then(resp => {
            setSalles(resp.data._embedded.salles)
        })
    }, [cineSelect])

    return (
        <section className="salle">
            <h2 className="font-bold px-1 flex justify-center p-2 mt-5 uppercase "></h2>
            <div className="flex">
            {salles.map((salle, index) => <Salle salle={salle} cinema={cineSelect} key={index}/>)}
            </div>
        </section>
    )
}

export default ListeSalles
