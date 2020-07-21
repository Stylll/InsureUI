import * as types from '../../constants/actionTypes';

export const createItem = (requestData) => ({
  type: types.CREATE_ITEM,
  requestData,
});

export const createItemSuccess = (item) => ({
  type: types.CREATE_ITEM_SUCCESS,
  item,
});

export const createItemFailure = (error) => ({
  type: types.CREATE_ITEM_FAILURE,
  error,
});

export const deleteItem = (id) => ({
  type: types.DELETE_ITEM,
  id,
});

export const deleteItemSuccess = () => ({
  type: types.DELETE_ITEM_SUCCESS,
});

export const deleteItemFailure = (error) => ({
  type: types.DELETE_ITEM_FAILURE,
  error,
});
