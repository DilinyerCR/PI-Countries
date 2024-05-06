import style from './Activity.module.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { addActivity } from '../../redux/actions';



const Activity = () => {

    const allCountries = useSelector(state => state.allCountries);
    const [selectedCountries, setSelectedCountries] = useState([]);
    
    const countriesSelected = (e) => {
        const selectedCountryId = e.target.value;
        const selectedCountry = allCountries.find(country => country.id === selectedCountryId);
        setSelectedCountries(prev => [...prev, selectedCountry]);
    }

    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
    });

    const handleInputChange = (e) => {
        setActivity({
           ...activity,
            [e.target.name]: e.target.name === 'difficulty' || e.target.name === 'duration' || e.target.name === 'season'
               ? parseInt(e.target.value, 10) // Convierte a número
                : e.target.value // Si no es uno de los campos mencionados, deja como está
        });
        console.log(activity)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activity)
            });
            if (!response.ok) {
                throw new Error('Error al crear la actividad');
            }
            // Manejar la respuesta del servidor
            // Por ejemplo, actualizar el estado de Redux con la nueva actividad
            dispatch(addActivity(activity));
            // Limpia el formulario o realiza otras acciones necesarias
            console.log(activity)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={style.ActivityMainContainer}>

            <form className={style.Form} onSubmit={handleSubmit}>
                <div className={style.NameContainer}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id='name' name='name' placeholder='Actividad' onChange={handleInputChange}/>
                </div>

                <div className={style.DurationContainer}>
                    <label htmlFor="duration">Duración:</label>
                    <input type="time" id="duration" name="duration" onChange={handleInputChange}/>
                </div>

                <div className={style.DifficultyContainer}>
                    <p>Dificultad</p>
                    <div className={style.DifficultyInputsContainer}>
                        <div className={style.OptionContainer}>
                            <label htmlFor="difficulty-1">1</label>
                            <input type="radio" id="difficulty-1" name="difficulty" value="1" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="difficulty-2">2</label>
                            <input type="radio" id="difficulty-2" name="difficulty" value="2" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="difficulty-3">3</label>
                            <input type="radio" id="difficulty-3" name="difficulty" value="3" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="difficulty-4">4</label>
                            <input type="radio" id="difficulty-4" name="difficulty" value="4" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="difficulty-5">5</label>
                            <input type="radio" id="difficulty-5" name="difficulty" value="5" onChange={handleInputChange}/> 
                        </div>     
                    </div>
                </div>

                <div className={style.SeasonContainer}>
                    <p>Temporada</p>
                    <div className={style.SeasonOptionsContainer}>   
                        <div className={style.OptionContainer}>
                            <label htmlFor="verano">Verano</label>
                            <input type="radio" id="verano" name="season" value="1" onChange={handleInputChange}value="1" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="otono">Otoño</label>
                            <input type="radio" id="otono" name="season" value="2" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="invierno">Invierno</label>
                            <input type="radio" id="invierno" name="season" value="3" onChange={handleInputChange}/>
                        </div>

                        <div className={style.OptionContainer}>
                            <label htmlFor="primavera">Primavera</label>
                            <input type="radio" id="primavera" name="season" value="4" onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>

                <div className={style.CountriesContainer}>
                    <label htmlFor="">Pais</label>
                    <select name="" id="" onChange={countriesSelected}>
                        <option value="none">Elige tus paises</option>
                        {allCountries?.map(country => (
                            <option 
                                key={country.id} 
                                value={country.id}>
                                    {country.name}
                            </option>
                        ))}
                    </select>
                </div>


                <button className={style.ActivityButton} type="submit">CREAR</button>

                <div className={style.SelectedCountriesContainer}>
                    {selectedCountries.map((country, index) => (
                        <p key={index}>{country.name}</p>
                    ))}
                </div>

            </form>
        </div>
    )
}

export default Activity