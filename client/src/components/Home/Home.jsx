import style from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import { fetchActivities, filterByContinent, filterCountriesByActivity, getAllCountries, nextPage, orderByName, orderByPopulation, prevPage } from '../../redux/actions';


const Home = () => {

  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);
  const currentPage = useSelector((state) => state.currentPage);

  const allCountries = useSelector((state) => state.allCountries)

  
  useEffect(() => {
    if (window.location.pathname === "/home" || window.location.pathname === "/activity") {
      dispatch(getAllCountries());
    }
    dispatch(fetchActivities());
    // console.log(allActivities);
  }, [dispatch]);

  const handleContinentChange = (e) => {
    const selectedContinent = e.target.value;
    dispatch(filterByContinent(selectedContinent));
  };

  
  const handleActivityChange = (e) => {
    const selectedActivityId = e.target.value;
    console.log("ID de la actividad seleccionada:", selectedActivityId);
    // console.log(allCountries);
    dispatch(filterCountriesByActivity(selectedActivityId));
  };
  


  return (
    <div className={style.HomeMainContainer}>
        <div className={style.FilterButtonsContainer}>
          <select name="" onChange={(e) => dispatch(orderByName(e.target.value))}>
            <option value="order">ORDEN</option>
            <option value="asc">Asc</option>
            <option value="desc">Des</option>
          </select>

          <select name="POBLACION" onChange={(e) => dispatch(orderByPopulation(e.target.value))}>
            <option value="POBLACION">POBLACION</option>
            <option value="asc">Asc</option>
            <option value="desc">Des</option>
          </select>

          <select name="CONTINENTE" onChange={handleContinentChange}>
            <option value="none">CONTINENTE</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antartica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <select name="ACTIVIDAD" id="" onChange={handleActivityChange}>
            <option value="ACTIVIDAD">ACTIVIDAD</option>
            {
              allActivities.map((activity) => (
                <option key={activity.id} value={activity.id}>
                  {activity.name}
                </option>
              ))
            }
          </select>
        </div>

        <Cards />
        
        <div className={style.ButtonsContainer}>
          <button onClick={() => dispatch(prevPage())}>Anterior</button>
          <p className={style.CurrentPage}>{currentPage} de 25</p>

          <button onClick={() => dispatch(nextPage())}>Siguiente</button>

        </div>
    </div>
  )
}

export default Home