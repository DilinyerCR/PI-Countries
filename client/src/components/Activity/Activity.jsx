import style from './Activity.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addActivity } from '../../redux/actions';



const Activity = () => {

    const allCountries = useSelector(state => state.allCountries);
    const [selectedCountryIds, setSelectedCountryIds] = useState([]);
    const dispatch = useDispatch();

    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue;

        if (name === 'difficulty' || name === 'duration') {
            newValue = parseInt(value, 10);
        } else if (name === 'season') {
            newValue = parseInt(value, 10);
        } else if (name === 'countryId') {
            newValue = [...selectedCountryIds, value];
        } else {
            newValue = value;
        }

        setActivity(prevState => ({
           ...prevState,
            [name]: newValue
        }));

        if (newValue && Array.isArray(newValue)) {
            setSelectedCountryIds(newValue);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...activity,
                    countryIds: selectedCountryIds // Incluye ID de países
                })
            });

            dispatch(addActivity(activity));
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
                            <input type="radio" id="verano" name="season" value="1" onChange={handleInputChange}/>
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
                    <label htmlFor="">País</label>
                    <select name="countryId" id="countryId" onChange={handleInputChange}>
                        <option value="">Elige tus países</option>
                        {allCountries?.map(country => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                        ))}
                    </select>
                </div>


                <button className={style.ActivityButton} type="submit">CREAR</button>

                <div className={style.SelectedCountriesContainer}>
                    {selectedCountryIds.map((countryId, index) => {
                        const countryName = allCountries.find(country => country.id === countryId)?.name;
                        return <p key={index}>{countryName || countryId}</p>;
                    })}
                </div>

            </form>
        </div>
    )
}

export default Activity