import { call } from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { toastr } from 'react-redux-toastr';

import {
  watchCreateItemSagaAsync,
  watchDeleteItemSagaAsync,
} from './item';
import api from '../../../services/ItemsApi';
import {
  createItemApiResponse,
  createItemRequestBody,
  serverError,
  serverErrorB,
  deleteItemApiResponse,
} from '../../testhelpers';
import {
  createItem,
  createItemSuccess,
  createItemFailure,
  deleteItem,
  deleteItemSuccess,
  deleteItemFailure,
} from '../../actionCreators/itemActions/itemActions';
import {
  getCategoryItems,
} from '../../actionCreators/categoryActions/categoryActions';

describe('Item Saga Test Suite', () => {
  describe('Create Item Saga', () => {
    it('should dispatch create item success action', () => {
      return expectSaga(watchCreateItemSagaAsync)
        .provide([
          [call.fn(api.createItem), createItemApiResponse],
        ])
        .call(toastr.success, '', 'Item created successfully')
        .put(createItemSuccess(createItemApiResponse.data.data))
        .dispatch(createItem(createItemRequestBody))
        .run();
    });

    it('should dispatch create item failure action', () => {
      return expectSaga(watchCreateItemSagaAsync)
        .provide([
          [call.fn(api.createItem), throwError(serverError)],
        ])
        .call(toastr.error, '', 'Name cannot be empty, Value cannot be empty')
        .put(createItemFailure({
          errors: serverError.response.data.errors,
          message: 'Name cannot be empty, Value cannot be empty',
        }))
        .dispatch(createItem(createItemRequestBody))
        .run();
    });
  });

  describe('Delete Item Saga', () => {
    it('should dispatch delete item success action', () => {
      return expectSaga(watchDeleteItemSagaAsync)
        .provide([
          [call.fn(api.deleteItem), deleteItemApiResponse],
        ])
        .call(toastr.success, '', 'Item deleted successfully')
        .put(deleteItemSuccess())
        .put(getCategoryItems())
        .dispatch(deleteItem(1))
        .run();
    });

    it('should dispatch delete item failure action', () => {
      return expectSaga(watchDeleteItemSagaAsync)
        .provide([
          [call.fn(api.deleteItem), throwError(serverErrorB)],
        ])
        .call(toastr.error, '', 'An error occurred')
        .put(deleteItemFailure({
          errors: {},
          message: 'An error occurred',
        }))
        .dispatch(deleteItem(99))
        .run();
    });
  });
});
