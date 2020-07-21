import categoryReducer, { initialState } from './category';
import {
  GET_CATEGORY_ITEMS, GET_CATEGORY_ITEMS_SUCCESS, GET_CATEGORY_ITEMS_FAILURE,
} from '../../constants/actionTypes';
import {
  getCategoryItemsApiResponse,
  errorData,
} from '../../testhelpers';

describe('Category Reducer Test Suite', () => {
  it('should return initial state', () => {
    const result = categoryReducer(undefined, {});
    expect(initialState).toEqual(result);
  });

  describe('Get Category Items Reducer Test', () => {
    it('should return proper state for get category items', () => {
      const expected = { ...initialState };
      expected.isCategoryItemsLoading = true;
      expected.getCategoryItemsSuccess = false;
      expected.getCategoryItemsErrorMessage = '';

      const action = {
        type: GET_CATEGORY_ITEMS,
      };

      const result = categoryReducer(initialState, action);
      expect(expected).toEqual(result);
    });

    it('should return proper state for get category items success', () => {
      const expected = { ...initialState };
      expected.isCategoryItemsLoading = false;
      expected.getCategoryItemsSuccess = true;
      expected.getCategoryItemsErrorMessage = '';
      expected.categoryItems = getCategoryItemsApiResponse.data.data;

      const action = {
        type: GET_CATEGORY_ITEMS_SUCCESS,
        categoryItems: getCategoryItemsApiResponse.data.data,
      };

      const result = categoryReducer(initialState, action);
      expect(expected).toEqual(result);
    });

    it('should return proper state for get category items failure', () => {
      const expected = { ...initialState };
      expected.isCategoryItemsLoading = false;
      expected.getCategoryItemsSuccess = false;
      expected.getCategoryItemsErrorMessage = errorData.message;

      const action = {
        type: GET_CATEGORY_ITEMS_FAILURE,
        error: errorData.message,
      };

      const result = categoryReducer(initialState, action);
      expect(expected).toEqual(result);
    });
  });
});
