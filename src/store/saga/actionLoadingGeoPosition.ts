import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  EActionsTypes,
  saveCoordsAction,
  errorCoordsAction,
} from '../actions/actions';

function* GeoPosition() {
  try {
    const { data } = yield call(() => axios.get('https://www.travelpayouts.com/whereami?locale=eng&ip'))
    yield put(saveCoordsAction(data))
  } catch (error) {
    yield put(errorCoordsAction())
  }
}

export function* watchGeoPosition() {
  yield takeEvery(EActionsTypes.LOADING_GEO, GeoPosition);
}
