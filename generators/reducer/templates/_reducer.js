import { handleActions } from 'redux-actions';
import * as actions from '../actions/<%= name %>';

/**
 * initialState will be the first thing passed to the reducers and is therefore what you state * * will be by default until any actions are executed
 */

const initialState = {
};

export default handleActions({
  // make each action return the object you want state to be for the given property
  [actions.<%= name %>]: (state, action) => ({ ...state, <%= state %>: action.payload }),
}, initialState);
