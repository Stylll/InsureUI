import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import item from './item/item';
import category from './category/category';

const appReducers = combineReducers({
  item,
  category,
  toastr: toastrReducer,
});

const rootReducer = (state, action) => {
  const updatedState = { ...state };

  return appReducers(updatedState, action);
};

export default rootReducer;
