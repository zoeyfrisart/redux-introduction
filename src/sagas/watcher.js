import { takeLatest } from 'redux-saga/effects';
// import { searchMediaSaga } from './mediaSaga';
import { searchPhotoSaga } from './photoSaga';
import { searchVideoSaga } from './videoSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchMedia() {
  yield [
    takeLatest(types.SEARCH_MEDIA_REQUEST, searchPhotoSaga),
    takeLatest(types.SEARCH_MEDIA_REQUEST, searchVideoSaga)
  ]
}