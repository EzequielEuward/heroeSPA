import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hook/useForm'
import { HeroCard } from '../components/HeroCard'
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHerosByName';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q=''} =queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({ 
    searchText: ''
  });

 const onSearchSubmit = (event)  => {
    event.preventDefault();
    if (searchText.trim().length <=1) return
     navigate(`?q=${searchText.toLowerCase().trim()}`)
 }

  return (
    <>
      <div className="row">
 
        <h1 className='text-light'>Busca el heroe</h1>
        <hr />
        <div className="col-5">
          <h4 className='text-light'>Buscar</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" placeholder="Buscar heroe" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-4 ">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4 className='text-light'>Resultados</h4>
          <hr />
          {
            (q===' ')? <div className="alert alert-primary">Buscar un heroe</div>
            : (heroes.length === 0 ) && <div className="alert alert-danger">No hay resultados para <b>{q}</b></div>
          }
          {
            heroes.map( hero => (<HeroCard key={hero.id} {...hero}/>) )
          }
        </div>
      </div>
    </>

  )
}

export default Search
