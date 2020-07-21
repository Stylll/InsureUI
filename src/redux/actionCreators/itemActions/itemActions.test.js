import * as types from '../../constants/actionTypes';
import {
  createItem,
  createItemSuccess,
  createItemFailure,
  deleteItem,
  deleteItemSuccess,
  deleteItemFailure,
} from './itemActions';

describe('Item Actions Test Suite', () => {
  describe('Create Item Test', () => {
    const itemData = {
      Name: 'Electronics',
      Value: '46.00',
      CategoryId: '1',
    };

    it('should return proper payload for create item', () => {
      const expected = {
        type: types.CREATE_ITEM,
        requestData: itemData,
      };
      const result = createItem(itemData);
      expect(expected).toEqual(result);
    });

    it('should return proper payload for create item success', () => {
      const expected = {
        type: types.CREATE_ITEM_SUCCESS,
        item: itemData,
      };
      const result = createItemSuccess(itemData);
      expect(expected).toEqual(result);
    });

    it('should return proper payload for create item failure', () => {
      const error = 'An error occurred';
      const expected = {
        type: types.CREATE_ITEM_FAILURE,
        error,
      };
      const result = createItemFailure(error);
      expect(expected).toEqual(result);
    });
  });

  describe('Delete Item Test', () => {
    const itemId = 2;

    it('should return proper payload for delete item', () => {
      const expected = {
        type: types.DELETE_ITEM,
        id: itemId,
      };
      const result = deleteItem(itemId);
      expect(expected).toEqual(result);
    });

    it('should return proper payload for delete item success', () => {
      const expected = {
        type: types.DELETE_ITEM_SUCCESS,
      };
      const result = deleteItemSuccess();
      expect(expected).toEqual(result);
    });

    it('should return proper payload for delete item failure', () => {
      const error = 'An error occurred';
      const expected = {
        type: types.DELETE_ITEM_FAILURE,
        error,
      };
      const result = deleteItemFailure(error);
      expect(expected).toEqual(result);
    });
  });
});
