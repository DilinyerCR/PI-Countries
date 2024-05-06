import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, NEXT_PAGE, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, PREV_PAGE, FETCH_ACTIVITIES, ADD_ACTIVITY } from "./actions-types";

const initialState = {
    allCountries: [],
    currentPage: 1, // Agrega la página actual
    itemsPerPage: 10, // Agrega la cantidad de elementos por página
    allActivities: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                allCountries: action.payload,
            }
        
        case NEXT_PAGE:
            if (state.currentPage >= 1 && state.currentPage < 25) {
                return {
                    ...state,
                    currentPage: state.currentPage + 1,
                };
                } else {
                    return state;
                }
    
        case PREV_PAGE:
            if (state.currentPage > 1 && state.currentPage <= 25) {
                return {
                    ...state,
                    currentPage: state.currentPage - 1,
                };
                } else {    
                    return state;
                }

        case ORDER_BY_NAME:
            return {
                ...state,
                allCountries: action.payload,
            }
        case ORDER_BY_POPULATION:
            return {
                ...state,
                allCountries: action.payload,
            }

        case FILTER_BY_CONTINENT:
            return {
                ...state,
                allCountries: action.payload,
            }

        case FETCH_ACTIVITIES:
            return { 
                ...state,
                allActivities: action.payload,
           }
        
        case ADD_ACTIVITY:
            return {
                ...state,
                allActivities: [...state.allActivities, action.payload]
            }

        default:
            return {...state}
    }
    
}

export default reducer;