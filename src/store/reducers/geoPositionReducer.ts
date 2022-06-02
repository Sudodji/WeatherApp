import { AnyAction } from 'redux';
import { EActionsTypes } from '../actions/actionGeoPosition';
import { IGeoPosition } from '../initialState';

const initialState:IGeoPosition = {
  name: {
    name: '',
  },
  loading: false,
  error: false,
}

// eslint-disable-next-line default-param-last
const geoPositionReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case EActionsTypes.LOADING_GEO:
      return { ...state, loading: true, error: false }
    case EActionsTypes.SAVE_COORDS:
      return {
        ...state, name: action.payload, loading: false, error: false,
      }
    case EActionsTypes.ERROR_COORDS:
      return {
        ...state, loading: false, error: true,
      }
    default:
      return state;
  }
}

export default geoPositionReducer;
