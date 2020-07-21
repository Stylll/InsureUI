import * as types from '../../constants/actionTypes';

export const getCategoryItems = () => ({
  type: types.GET_CATEGORY_ITEMS,
});

export const getCategoryItemsSuccess = (categoryItems) => ({
  type: types.GET_CATEGORY_ITEMS_SUCCESS,
  categoryItems,
});

export const getCategoryItemsFailure = (error) => ({
  type: types.GET_CATEGORY_ITEMS_FAILURE,
  error,
});
