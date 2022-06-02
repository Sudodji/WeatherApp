import { AnyAction } from 'redux';
import { EActionsTypes } from '../actions/actionAutoComplete';
import { IAutoComplete } from '../initialState';

const initialState: IAutoComplete = {
  data: {
    _embedded: {
      'city:search-results': [{
        matching_full_name: '',
      }],
    },
  },
  loading: false,
  error: false,
}

// eslint-disable-next-line default-param-last
const autoCompleteReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case EActionsTypes.LOADING_AUTO_COMPLETE:
      return { ...state, loading: true, error: false }
    case EActionsTypes.SAVE_AUTO_RESULTS:
      return {
        ...state, data: action.payload, loading: false, error: false,
      }
    case EActionsTypes.ERROR_AUTO_RESULTS:
      return {
        ...state, loading: false, error: true,
      }
    default:
      return state;
  }
}

export default autoCompleteReducer;
