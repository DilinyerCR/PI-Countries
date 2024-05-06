import style from './SearchBar.module.css';
import { getAllCountries, getCountryByName } from '../../redux/actions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [ country, setCountry ] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClick = () => {
    dispatch(getAllCountries())
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(country.length < 1) {
      alert("Debe introducir un pais")
      return
    }

    setCountry("")
    dispatch(getCountryByName(country))
  };

  return (
    <div className={style.SearchBarMainContainer}>
        <form onSubmit={handleSubmit}>
            <div className={style.InputMainContainer}>

                <input 
                type="text" 
                placeholder='Nombre del pais' 
                value={country}
                onChange={handleChange}
                />

                <button>Buscar</button>
            </div>
        </form>
        
        <Link to="/home">
          <button className={style.SearchBarHomeButton} onClick={handleClick}>Home</button>
        </Link>

        <Link to="/activity">
          <button className={style.NewActivityButton} onClick={handleClick}>Nueva Actividad</button>
        </Link>
        
    </div>
  )
}

export default SearchBar