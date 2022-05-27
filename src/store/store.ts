import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from '@redux-saga/core';
import { watchAxiosWeather } from './saga/actionLoadingCity';
import { watchAxiosAutoComplete } from './saga/actionLoadingAutoComplete';
import dayWeatherReducer from './reducers/dayWeatherReducer';
import autoCompleteReducer from './reducers/autoCompleteReducer';
import geoPositionReducer from './reducers/geoPositionReducer';
import { watchGeoPosition } from './saga/actionLoadingGeoPosition';

const rootReducer = combineReducers({
  dayTemp: dayWeatherReducer,
  autoComplete: autoCompleteReducer,
  geoPosition: geoPositionReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAxiosWeather);
sagaMiddleware.run(watchAxiosAutoComplete);
sagaMiddleware.run(watchGeoPosition);

export default store;
