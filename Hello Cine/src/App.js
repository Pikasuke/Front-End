import React, { useEffect, useState } from 'react';
import './App.css';
import Cinema from './components/ListeCinemas/Cinema';
import Ville from './components/ListeVilles/Ville';
import axios from './Axios';
import ListeSalles from './components/ListeSalles/ListeSalles';

function App() {

  const [villes, setvilles] = useState([])
  const [villeSelect, setVilleSelect] = useState(null)
  const [cineSelect, setCineSelect] = useState(null)

  useEffect(() => {
    axios.get('/villes').then(resp => {
      setvilles(resp.data._embedded.villes)
    })
  }, [])

  const getCinema = (ville) => {
    if (ville !== villeSelect) {
      setCineSelect(null)
    }
    setVilleSelect(ville._links.cinemas.href)
  }

  const getSalle = (cinema) => {
    setCineSelect(cinema._links.salles.href)
  }

  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-4xl uppercase border-2 border-blue-500 rounded bg-blue-100 tracking-widest p-5 my-5 ">Hello Ciné</h1>
      <aside>
        <Ville villes={villes} getCineFunction={getCinema}/>
      </aside>
      {villeSelect && <Cinema villeSelect={villeSelect} getSalleFunction={getSalle}/>}
      {cineSelect && <ListeSalles cineSelect={cineSelect}/>}
    </div>
    
  );
}

export default App;
