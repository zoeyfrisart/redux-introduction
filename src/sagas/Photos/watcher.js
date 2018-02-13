import { takeLatest } from 'redux-saga/effects';
import { searchPhotoSaga } from './index';
import * as types from '../../constants/actionTypes';

// Watches for SEARCH_PHOTO_REQUEST action type asynchronously
export default function* watchSearchPhoto() {
  yield takeLatest(types.SEARCH_PHOTO_REQUEST, searchPhotoSaga)
}