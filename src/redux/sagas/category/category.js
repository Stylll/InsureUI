import { put, takeLatest, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { apiErrorHandler } from '../../../helpers/utils';
import CategoriesApi from '../../../services/CategoriesApi';
import {
  getCategoryItems,
  getCategoryItemsSuccess,
  getCategoryItemsFailure,
} from '../../actionCreators/categoryActions/categoryActions';

export function* watchGetCategoryItemsSagaAsync() {
  yield takeLatest(getCategoryItems().type, getCategoryItemsSagaAsync);
}

export function* getCategoryItemsSagaAsync() {
  try {
    const response = yield call(CategoriesApi.getCategoryItems);
    yield put(getCategoryItemsSuccess(response.data.data));
    // eslint-disable-next-line no-undef
    yield call(toastr.success, '', 'Category Items retrieved successfully');
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    yield put(getCategoryItemsFailure({
      errors: error.response.data && error.response.data.errors
      && error.response.data.errors.length ? error.response.data.errors : {},
      message: errorMessage,
    }));
    yield call(toastr.error, '', errorMessage || 'An error occurred');
  }
}
