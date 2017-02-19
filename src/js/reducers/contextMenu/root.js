import { combineReducers } from 'redux';
import actions from './menuActions';
import position from './position';
import visible from './visible';

export default combineReducers({
  actions,
  position,
  visible
});