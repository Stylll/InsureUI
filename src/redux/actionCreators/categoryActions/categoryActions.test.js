import * as types from '../../constants/actionTypes';
import {
  getCategoryItems,
  getCategoryItemsSuccess,
  getCategoryItemsFailure,
} from './categoryActions';
import {
  getCategoryItemsApiResponse,
} from '../../testhelpers';

describe('Category Actions Test Suite', () => {
  describe('Get Category Items Test', () => {
    it('should return proper payload for get category items', () => {
      const expected = {
        type: types.GET_CATEGORY_ITEMS,
      };

      const result = getCategoryItems();
      expect(expected).toEqual(result);
    });

    it('should return proper payload for get category items success', () => {
      const expected = {
        type: types.GET_CATEGORY_ITEMS_SUCCESS,
        categoryItems: getCategoryItemsApiResponse.data.data,
      };

      const result = getCategoryItemsSuccess(getCategoryItemsApiResponse.data.data);
      expect(expected).toEqual(result);
    });

    it('should return proper payload for get category items failure', () => {
      const error = 'An error occurred';
      const expected = {
        type: types.GET_CATEGORY_ITEMS_FAILURE,
        error,
      };

      const result = getCategoryItemsFailure(error);
      expect(expected).toEqual(result);
    });
  });
});
