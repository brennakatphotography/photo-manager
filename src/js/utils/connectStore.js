import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import reducers from '../reducers/root';

export const connectAll = connect(store => store);

export const connectDispatch = connect(({ dispatch }) => ({ dispatch}));

export const makeStore = routing => combineReducers({
  ...reducers,
  routing
});