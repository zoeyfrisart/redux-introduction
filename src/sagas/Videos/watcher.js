import { takeLatest } from 'redux-saga/effects';
import { searchVideoSaga } from './index';
import * as types from '../../constants/actionTypes';

// Watches for SEARCH_VIDEO_REQUEST action type asynchronously
export default function* watchSearchVideo() {
  yield takeLatest(types.SEARCH_VIDEO_REQUEST, searchVideoSaga)
};