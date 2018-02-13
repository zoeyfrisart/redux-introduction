import { fork, all } from 'redux-saga/effects';
import watchSearchPhoto from './Photos/watcher';
import watchSearchVideo from './Videos/watcher';

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForman() {
  yield all([
    fork(watchSearchPhoto),
    fork(watchSearchVideo),
  ])
};
