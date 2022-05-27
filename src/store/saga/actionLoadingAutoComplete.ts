import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  EActionsTypes,
  saveAutoResultsAction,
  errorAutoResultsAction,
} from '../actions/actions';

type Props = {
  type: EActionsTypes.LOADING_AUTO_COMPLETE,
  payload: string,
}

function* axiosAutoCompleteAsync(action: Props) {
  try {
    const { data } = yield call(() => axios.get(`https://api.teleport.org/api/cities/?search=${action.payload}`))
    yield put(saveAutoResultsAction(data))
  } catch (error) {
    yield put(errorAutoResultsAction())
  }
}

export function* watchAxiosAutoComplete() {
  yield takeEvery(EActionsTypes.LOADING_AUTO_COMPLETE, axiosAutoCompleteAsync)
}
