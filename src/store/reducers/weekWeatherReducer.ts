import { AnyAction } from 'redux';
import { EActionsTypes } from '../actions/actions';
import { IWeekTemp } from '../initialState';

const initialState:IWeekTemp = {
  main: {
    list: [],
  },
  loading: false,
  error: false,
}

// eslint-disable-next-line default-param-last
const weekWeatherReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case EActionsTypes.LOADING_FORECAST:
      return { ...state, loading: true, error: false }
    case EActionsTypes.SAVE_FORECAST:
      return {
        ...state, main: action.payload, loading: false, error: false,
      }
    case EActionsTypes.ERROR_FORECAST:
      return {
        ...state, loading: false, error: true,
      }
    default:
      return state;
  }
}

export default weekWeatherReducer;
