/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_CONTROLLERS,
  LOAD_CONTROLLERS_ERROR,
  LOAD_CONTROLLERS_SUCCESS,
  TOGGLE_CONTROLLER,
  TOGGLE_CONTROLLER_ERROR,
  TOGGLE_CONTROLLER_SUCCESS,
  TOGGLE_CONTROLLER_STATUS,
  TOGGLE_CONTROLLER_STATUS_ERROR,
  TOGGLE_CONTROLLER_STATUS_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  userData: {
    controllers: false,
  },
});

const toggleController = (state) => ({
  [TOGGLE_CONTROLLER]: () => state
    .set('loading', true)
    .set('error', false),
  [TOGGLE_CONTROLLER_ERROR]: () => state
    .set('loading', false)
    .set('error', true),
  [TOGGLE_CONTROLLER_SUCCESS]: () => state
    .set('loading', false)
    .set('error', false),
});

const loadControllers = (state, action) => ({
  [LOAD_CONTROLLERS]: () => state
    .set('loading', true)
    .set('error', false)
    .setIn(['userData', 'controllers'], false),
  [LOAD_CONTROLLERS_ERROR]: () => state
    .set('loading', false)
    .set('error', true)
    .setIn(['userData', 'controllers'], false),
  [LOAD_CONTROLLERS_SUCCESS]: () => state
    .set('loading', false)
    .set('error', false)
    .setIn(['userData', 'controllers'], action.payload),
});

const toggleControllerStatus = (state, action) => ({
  [TOGGLE_CONTROLLER_STATUS]: () => state
    .set('loading', true)
    .set('error', false),
  [TOGGLE_CONTROLLER_STATUS_ERROR]: () => state
    .set('loading', false)
    .set('error', true),
  [TOGGLE_CONTROLLER_STATUS_SUCCESS]: () => state
    .set('loading', false)
    .set('error', false)
    .setIn(['userData', 'controllers'], action.payload),
});

function homeReducer(state = initialState, action) {
  const cases = {
    ...toggleController(state, action),
    ...loadControllers(state, action),
    ...toggleControllerStatus(state, action),
    [DEFAULT_ACTION]: () => state,
  };
  return (cases[action.type] || cases[DEFAULT_ACTION])(action);
}

export default homeReducer;
