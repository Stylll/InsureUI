import * as types from '../../constants/actionTypes';

export const initialState = {
  categoryItems: {},
  isCategoryItemsLoading: false,
  getCategoryItemsSuccess: false,
  getCategoryItemsErrorMessage: '',
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_ITEMS:
      return {
        ...state,
        isCategoryItemsLoading: true,
        getCategoryItemsSuccess: false,
        getCategoryItemsErrorMessage: '',
      };
    case types.GET_CATEGORY_ITEMS_SUCCESS:
      return {
        ...state,
        categoryItems: action.categoryItems,
        isCategoryItemsLoading: false,
        getCategoryItemsSuccess: true,
        getCategoryItemsErrorMessage: '',
      };
    case types.GET_CATEGORY_ITEMS_FAILURE:
      return {
        ...state,
        isCategoryItemsLoading: false,
        getCategoryItemsSuccess: false,
        getCategoryItemsErrorMessage: action.error,
      };
    default:
      return state;
  }
};

export default category;
