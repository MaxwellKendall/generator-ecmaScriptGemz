import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * rootReducer:
 *   - creates initial state
 *   - key is state
 *   - Value is reducer that returns state
 */

const rootReducer = combineReducers({
  router: routerReducer, // from reduxRouter
});

export default rootReducer;
