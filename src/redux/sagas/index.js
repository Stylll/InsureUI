import { all } from 'redux-saga/effects';

import * as itemSaga from './item/item';

function* rootSaga() {
  yield all([
    itemSaga.watchCreateItemSagaAsync(),
  ]);
}

export default rootSaga;
