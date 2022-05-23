import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from '@redux-saga/core';
import { watchAxiosWeather } from './saga/actionLoadingCity';
import dayWeatherReducer from './reducers/dayWeatherReducer';

const rootReducer = combineReducers({
  dayTemp: dayWeatherReducer,
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAxiosWeather)

export default store;
