import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, NEXT_PAGE, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, PREV_PAGE, FETCH_ACTIVITIES, ADD_ACTIVITY, FILTER_COUNTRIES_BY_ACTIVITY } from "./actions-types";



export const getAllCountries = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/countries`);

            const data = await response.json();

            dispatch({
                type: GET_ALL_COUNTRIES, 
                payload: data
            });

        } catch (error) {
            console.error('Error fetching character:', error);
        }
    }
}


export const getCountryByName = (country) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/countries/country/name?name=${country}`);

            const data = await response.json();

            dispatch({
                type: GET_COUNTRY_BY_NAME, 
                payload: data
            });

            console.log(data)

        } catch (error) {
            console.error('Error fetching character:', error);
        }
    }
}


export const nextPage = () => {
    return async (dispatch, getState) => {
        const { currentPage } = getState();
        if (currentPage >= 1 && currentPage < 25) {
            dispatch({
              type: NEXT_PAGE,
            });
        }
    }
};

export const prevPage = () => {
    return async (dispatch, getState) => {
        const { currentPage } = getState();
        if (currentPage >= 1 && currentPage < 25) {
            dispatch({
              type: PREV_PAGE,
            });
        }
    }
};


export const orderByName = (orderOption) => {
    return async (dispatch, getState) => {
        const { allCountries } = getState();
        const sortedCountries = [...allCountries].sort((a, b) => {
            if (orderOption === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (orderOption === 'desc') {
                return b.name.localeCompare(a.name);
            } 
        });
        dispatch({
            type: ORDER_BY_NAME,
            payload: sortedCountries,
        });
    };
};


export const orderByPopulation = (orderOption) => {
    return async (dispatch, getState) => {
        const { allCountries } = getState();
        const sortedCountries = [...allCountries].sort((a, b) => {
            const populationA = Number(a.population);
            const populationB = Number(b.population);

            if (orderOption === 'asc') {
                return populationA - populationB;
            } else if (orderOption === 'desc') {
                return populationB - populationA;
            }
        });

        dispatch({
            type: ORDER_BY_POPULATION,
            payload: sortedCountries,
        });
    };
};


export const filterByContinent = (continent) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/countries`);

        const allCountries = await response.json();

        if(continent !== "none") {
            
            const filteredCountries = allCountries.filter(country => country.continent === continent);
            
            dispatch({
                type: FILTER_BY_CONTINENT,
                payload: filteredCountries,
            });

        }
    };
};


export const fetchActivities = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/activities');
            const activities = await response.json();
    
            dispatch({ 
                type: FETCH_ACTIVITIES, 
                payload: activities 
            });
    
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };
}


export const addActivity = (activity) => ({
    type: ADD_ACTIVITY,
    payload: activity
});


export const filterCountriesByActivity = (activityId) => {
    return async (dispatch, getState) => {
        const { allActivities } = getState();
        const activity = allActivities.find(activity => String(activity.id) === activityId); // !Se pasa a String el ID para que sea igual al ID recibido por argumento, no me funcionaba por eso.
        
        if (activity) {
            console.log("Países de la actividad:", activity.Countries);
            dispatch({
                type: FILTER_COUNTRIES_BY_ACTIVITY,
                payload: activity.Countries
            });
        }
    }; 
};
  