import itemReducer, { initialState } from './item';
import {
  CREATE_ITEM,
  CREATE_ITEM_FAILURE,
  CREATE_ITEM_SUCCESS,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from '../../constants/actionTypes';
import {
  createItemSuccessData, errorData,
} from '../../testhelpers';

describe('Item Reducer Test Suite', () => {
  it('should return initial state', () => {
    const result = itemReducer(undefined, {});
    expect(initialState).toEqual(result);
  });

  describe('Create Item Reducer', () => {
    it('should return proper state for create item', () => {
      const expected = { ...initialState };
      expected.isLoading = true;
      expected.errorMessage = '';
      expected.createItemSuccess = false;
      const result = itemReducer(initialState, { type: CREATE_ITEM });
      expect(expected).toEqual(result);
    });

    it('should return proper state for create item success', () => {
      const expected = { ...initialState };
      expected.isLoading = false;
      expected.errorMessage = '';
      expected.createItemSuccess = true;
      expected.item = createItemSuccessData;
      const action = {
        type: CREATE_ITEM_SUCCESS,
        item: createItemSuccessData,
      };
      const result = itemReducer(initialState, action);
      expect(expected).toEqual(result);
    });

    it('should return proper state for create item failure', () => {
      const expected = { ...initialState };
      expected.isLoading = false;
      expected.errorMessage = errorData.message;
      expected.createItemSuccess = false;
      const action = {
        type: CREATE_ITEM_FAILURE,
        error: errorData,
      };
      const result = itemReducer(initialState, action);
      expect(expected).toEqual(result);
    });
  });

  describe('Delete Item Reducer', () => {
    it('should return proper state for delete item', () => {
      const expected = { ...initialState };
      expected.isDeleteLoading = true;
      expected.errorMessage = '';
      expected.deleteItemSuccess = false;
      const result = itemReducer(initialState, { type: DELETE_ITEM });
      expect(expected).toEqual(result);
    });

    it('should return proper state for delete item success', () => {
      const expected = { ...initialState };
      expected.isDeleteLoading = false;
      expected.errorMessage = '';
      expected.deleteItemSuccess = true;
      const action = {
        type: DELETE_ITEM_SUCCESS,
      };
      const result = itemReducer(initialState, action);
      expect(expected).toEqual(result);
    });

    it('should return proper state for delete item failure', () => {
      const expected = { ...initialState };
      expected.isDeleteLoading = false;
      expected.errorMessage = errorData.message;
      expected.deleteItemSuccess = false;
      const action = {
        type: DELETE_ITEM_FAILURE,
        error: errorData,
      };
      const result = itemReducer(initialState, action);
      expect(expected).toEqual(result);
    });
  });
});
