import { IState } from '../initialState';

const getAutoCompleteState = (state:IState) => state.autoComplete;
const getGeoPositionState = (state:IState) => state.geoPosition;
const getDayTempState = (state:IState) => state.dayTemp;

export { getAutoCompleteState, getGeoPositionState, getDayTempState }
