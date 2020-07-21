import { put, takeLatest, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { apiErrorHandler } from '../../../helpers/utils';
import ItemsApi from '../../../services/ItemsApi';
import {
  createItem,
  createItemSuccess,
  createItemFailure,
} from '../../actionCreators/itemActions/itemActions';

export function* watchCreateItemSagaAsync() {
  yield takeLatest(createItem().type, createItemSagaAsync);
}

export function* createItemSagaAsync(action) {
  try {
    const response = yield call(ItemsApi.createItem, action.requestData);
    yield put(createItemSuccess(response.data.data));
    // eslint-disable-next-line no-undef
    yield call(toastr.success, '', 'Item created successfully');
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    yield put(createItemFailure({
      errors: error.response.data && error.response.data.errors
      && error.response.data.errors.length ? error.response.data.errors : {},
      message: errorMessage,
    }));
    yield call(toastr.error, '', errorMessage || 'An error occurred');
  }
}
