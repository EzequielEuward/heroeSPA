import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";


export const Hero = () => {

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__fadeInLeft" src={` /assets/heroes/${id}.jpg `} alt={hero.superhero} />
      </div>
      <div className="col-8">
        <h3 className="text-light" >{hero.superhero}</h3>
        <ul className="list-group list-group-flush custom-list-group">
          <li className="list-group-item custom-list-group-item text-light"><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item custom-list-group-item text-light"><b>Publicado por: </b>{hero.publisher}</li>
          <li className="list-group-item custom-list-group-item text-light"><b>Primera aparición: </b>{hero.first_appearance}</li>
        </ul>

        <h5 className="text-light mt-3">Personajes</h5>
        <p className="text-light">{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>Volver atras</button>
      </div>
    </div>
  )
}

export default Hero
