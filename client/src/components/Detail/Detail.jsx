import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Detail = () => {

    const { id } = useParams();
    const country = useSelector((state) => state.allCountries.find(country => country.id === id))

    return (
        <div className={style.DetailMainContainer}>
            <div className={style.DetailCard}>
                <div className={style.ImageContainer}>
                    <img src={country.flag} alt="" />
                </div>

                <div className={style.InformationContainer}>
                    <div className={style.NameContainer}>
                        <h4>"{country.name}"</h4>
                    </div>
                    <p>ID: {country.id}</p>
                    <p>Continente: {country.continent}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Subregion: {country?.subregion}</p>
                    <p>Area: {country?.area}</p>
                    <p>Poblacion: {country.population}</p>
                </div>

            </div>
        </div>
    )
}

export default Detail;