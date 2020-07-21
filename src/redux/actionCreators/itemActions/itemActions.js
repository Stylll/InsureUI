import * as types from '../../constants/actionTypes';

export const createItem = (requestData) => {
  return {
    type: types.CREATE_ITEM,
    requestData,
  };
};

export const createItemSuccess = (item) => ({
  type: types.CREATE_ITEM_SUCCESS,
  item,
});

export const createItemFailure = (error) => ({
  type: types.CREATE_ITEM_FAILURE,
  error,
});
