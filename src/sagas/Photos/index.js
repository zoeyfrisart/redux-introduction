import { put, call } from 'redux-saga/effects';
import { flickrImages } from '../../Api/api';
import * as types from '../../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchPhotoSaga({ payload }) {
  try {
    const images = yield call(flickrImages, payload);
    yield [
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_PHOTO_ERROR', error });
  }
}