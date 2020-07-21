import { call } from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { toastr } from 'react-redux-toastr';

import {
  watchCreateItemSagaAsync,
} from './item';
import api from '../../../services/ItemsApi';
import {
  createItemApiResponse,
  createItemRequestBody,
  serverError,
} from '../../testhelpers';
import {
  createItemSuccess,
  createItem,
  createItemFailure,
} from '../../actionCreators/itemActions/itemActions';

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
});
