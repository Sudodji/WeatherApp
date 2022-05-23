// import { AnyAction } from 'redux';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  EActionsTypes,
  saveTempAction,
  errorTempAction,
} from '../actions/actions';

 type Props = {
    type: EActionsTypes.LOADING_CITY,
    payload: string,
}

function* axiosWeatherAsync(action:Props) {
  try {
    // eslint-disable-next-line max-len
    const { data } = yield call(() => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=f595fef9007f65f8157c0faa1ce3c95e`))
    yield put(saveTempAction(data))
  } catch (error) {
    yield put(errorTempAction())
  }
}

export function* watchAxiosWeather() {
  yield takeEvery(EActionsTypes.LOADING_CITY, axiosWeatherAsync);
}
