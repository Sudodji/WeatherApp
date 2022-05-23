import { AnyAction } from 'redux';
import { EActionsTypes } from '../actions/actions';
import { IDayTemp } from '../initialState';

const initialState:IDayTemp = {
  main: {
    temp: 0,
    pressure: 0,
    humidity: 0,
  },
  weather: [{
    icon: '',
  }],
  loading: false,
  error: false,
}

// eslint-disable-next-line default-param-last
const dayWeatherReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case EActionsTypes.LOADING_CITY:
      return { ...state, loading: true, error: false }
    case EActionsTypes.SAVE_TEMP:
      return {
        ...state, main: action.payload[0], weather: action.payload[1], loading: false, error: false,
      }
    case EActionsTypes.ERROR_TEMP:
      return {
        ...state, loading: false, error: true,
      }
    default:
      return state;
  }
}

export default dayWeatherReducer;
