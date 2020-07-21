import { call } from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { toastr } from 'react-redux-toastr';

import {
  watchGetCategoryItemsSagaAsync,
} from './category';
import api from '../../../services/CategoriesApi';
import {
  getCategoryItemsApiResponse,
  createItemRequestBody,
  serverErrorB,
} from '../../testhelpers';
import {
  getCategoryItems,
  getCategoryItemsSuccess,
  getCategoryItemsFailure,
} from '../../actionCreators/categoryActions/categoryActions';

describe('Category Saga Test Suite', () => {
  describe('Get Category Item Saga', () => {
    it('should dispatch get category item success action', () => {
      return expectSaga(watchGetCategoryItemsSagaAsync)
        .provide([
          [call.fn(api.getCategoryItems), getCategoryItemsApiResponse],
        ])
        .call(toastr.success, '', 'Category Items retrieved successfully')
        .put(getCategoryItemsSuccess(getCategoryItemsApiResponse.data.data))
        .dispatch(getCategoryItems())
        .run();
    });

    it('should dispatch get category item failure action', () => {
      return expectSaga(watchGetCategoryItemsSagaAsync)
        .provide([
          [call.fn(api.getCategoryItems), throwError(serverErrorB)],
        ])
        .call(toastr.error, '', 'An error occurred')
        .put(getCategoryItemsFailure({
          errors: {},
          message: serverErrorB.response.data.message,
        }))
        .dispatch(getCategoryItems())
        .run();
    });
  });
});
