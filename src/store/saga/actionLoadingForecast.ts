import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  EActionsTypes,
  saveForecastAction,
  errorForecastAction,
} from '../actions/actionWeekWeather';

type Props = {
  type: EActionsTypes.LOADING_FORECAST,
  payload: string,
}

function* axiosForecastAsync(action: Props) {
  try {
    // eslint-disable-next-line max-len
    const { data } = yield call(() => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&units=metric&appid=f595fef9007f65f8157c0faa1ce3c95e`))
    yield put(saveForecastAction(data))
  } catch (error) {
    yield put(errorForecastAction())
  }
}

export function* watchAxiosForecast() {
  yield takeEvery(EActionsTypes.LOADING_FORECAST, axiosForecastAsync);
}
