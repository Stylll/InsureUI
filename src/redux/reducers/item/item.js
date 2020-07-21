import * as types from '../../constants/actionTypes';

export const initialState = {
  item: {},
  isLoading: false,
  createItemSuccess: false,
  isDeleteLoading: false,
  deleteItemSuccess: false,
  errorMessage: '',
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ITEM:
      return {
        ...state,
        isLoading: true,
        createItemSuccess: false,
        errorMessage: '',
      };
    case types.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createItemSuccess: true,
        item: action.item,
        errorMessage: '',
      };
    case types.CREATE_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        createItemSuccess: false,
        errorMessage: action.error.message,
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        isDeleteLoading: true,
        deleteItemSuccess: false,
        errorMessage: '',
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isDeleteLoading: false,
        deleteItemSuccess: true,
        errorMessage: '',
      };
    case types.DELETE_ITEM_FAILURE:
      return {
        ...state,
        isDeleteLoading: false,
        deleteItemSuccess: false,
        errorMessage: action.error.message,
      };
    default:
      return state;
  }
};

export default item;
