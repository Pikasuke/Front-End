import './Projection.css'
import Projection from './Projection'

const ListeProjections = ({ projections, getFilm }) => {


    return (
        <div className="projection ">
            {projections.map((p, index) =>
                <Projection projection={p} getFilm={getFilm} key={index} />)
            }

        </div>
    )
}

export default ListeProjections
