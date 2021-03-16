import { useState, useEffect } from "react";
import axios from "../../Axios";
import ListeProjections from "../ListeProjections/ListeProjections";

const Salle = ({ salle, cinema }) => {
  const [projections, setProjections] = useState([]);
  const [afficheFilm, setAfficheFilm] = useState("");
  const [duree, setDuree] = useState("");
  const [realisateur, setRealisateur] = useState("");
  const [titre, settitre] = useState("");
  const [film, setFilm] = useState("");

  useEffect(() => {
    axios
      .get(
        salle._links.projections.href.replace(
          "{?projection}",
          "?projection=projFilm"
        )
      )
      .then((resp) => {
        setProjections(resp.data._embedded.projections);
      });
  }, [salle]);


  const getFilm = (f) => {
    setFilm(f);
    setAfficheFilm("http://localhost:8080/imageFilm/" + f.id);
    setDuree(f.duree + " heure");
    setRealisateur(f.realisateur);
    settitre(f.titre);
  };

  return (
    <>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="each mb-10 m-2 shadow-lg border-gray-800 rounded bg-gray-100 relative p-3 text-2xl">
          {salle.name} :  {titre}
          <img className="w-full p-2 " src={afficheFilm} alt="affiche du film" />
          <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300 rounded ">
            <span className="mr-1 p-1 px-2 font-bold">
              Réalisateur : {realisateur}
            </span>
            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
              {duree} {film.prix}
            </span>
          </div>

          <div className="desc p-4 text-gray-800">
            <ListeProjections projections={projections} getFilm={getFilm} />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Salle;
