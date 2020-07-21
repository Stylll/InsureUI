import { all } from 'redux-saga/effects';

import * as itemSaga from './item/item';
import * as categorySaga from './category/category';

function* rootSaga() {
  yield all([
    itemSaga.watchCreateItemSagaAsync(),
    itemSaga.watchDeleteItemSagaAsync(),
    categorySaga.watchGetCategoryItemsSagaAsync(),
  ]);
}

export default rootSaga;
