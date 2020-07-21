import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import item from './item/item';

const appReducers = combineReducers({
  item,
  toastr: toastrReducer,
});

const rootReducer = (state, action) => {
  const updatedState = { ...state };

  return appReducers(updatedState, action);
};

export default rootReducer;
