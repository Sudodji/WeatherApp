import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from '@redux-saga/core';
import { all, fork } from 'redux-saga/effects';
import { watchAxiosWeather } from './saga/actionLoadingCity';
import { watchAxiosAutoComplete } from './saga/actionLoadingAutoComplete';
import dayWeatherReducer from './reducers/dayWeatherReducer';
import autoCompleteReducer from './reducers/autoCompleteReducer';
import geoPositionReducer from './reducers/geoPositionReducer';
import { watchGeoPosition } from './saga/actionLoadingGeoPosition';
import weekWeatherReducer from './reducers/weekWeatherReducer';
import { watchAxiosForecast } from './saga/actionLoadingForecast';

const rootReducer = combineReducers({
  dayTemp: dayWeatherReducer,
  weekTemp: weekWeatherReducer,
  autoComplete: autoCompleteReducer,
  geoPosition: geoPositionReducer,
});

function* rootSaga() {
  yield all([
    fork(watchAxiosWeather),
    fork(watchAxiosAutoComplete),
    fork(watchGeoPosition),
    fork(watchAxiosForecast),
  ])
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

/* sagaMiddleware.run(watchAxiosWeather);
sagaMiddleware.run(watchAxiosAutoComplete);
sagaMiddleware.run(watchGeoPosition);
sagaMiddleware.run(watchAxiosForecast); */
sagaMiddleware.run(rootSaga)

export default store;
