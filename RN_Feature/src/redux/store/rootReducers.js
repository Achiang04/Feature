import {combineReducers} from 'redux';
import tokenReducer from '../reducer/tokenReducer';

const rootReducer = combineReducers({
  tokenReducer,
});

export default rootReducer;
