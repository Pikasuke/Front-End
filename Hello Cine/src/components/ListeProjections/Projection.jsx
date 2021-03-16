import React, { useEffect, useState } from "react";
import axios from "../../Axios";

function Projection({ projection, getFilm }) {
  const [listeTickets, setListeTickets] = useState([])
  const { film } = projection;
  const { heureDebut } = projection.sceance;
  const {prix} = projection;
  

  useEffect(() => {
    getFilm(film);
  }, [projection]);

  useEffect(() => {
    axios.get(projection._links.tickets.href.replace("{?projection}","?projection=ticketProj")).then((resp)=> { 
    setListeTickets(resp.data._embedded.tickets);
    })
  }, [projection])

  const getPaiement=() => {
    window.alert("Merci d'avoir testé !");
  }

  return (
    <div>
      <h3 className="border-2 border-blue-400 my-2 p-1 rounded cursor-pointer" onClick={getPaiement} >Scéance de {heureDebut.substring(0,5)} à {prix}€</h3>
    </div>
  );
}

export default Projection;
