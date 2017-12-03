/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_CONTROLLER_STATUS,
  TOGGLE_CONTROLLER_STATUS_ERROR,
  TOGGLE_CONTROLLER_STATUS_SUCCESS,
  TOGGLE_CONTROLLER,
  TOGGLE_CONTROLLER_ERROR,
  TOGGLE_CONTROLLER_SUCCESS,
  LOAD_CONTROLLERS,
  LOAD_CONTROLLERS_ERROR,
  LOAD_CONTROLLERS_SUCCESS,
  SETUP_CLICK,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const loadControllers = () => ({ type: LOAD_CONTROLLERS });
export const loadControllersError = () => ({ type: LOAD_CONTROLLERS_ERROR });
export const loadControllersSuccess = (payload) => ({ type: LOAD_CONTROLLERS_SUCCESS, payload });

export const toggleController = (payload) => ({ type: TOGGLE_CONTROLLER, payload });
export const toggleControllerError = () => ({ type: TOGGLE_CONTROLLER_ERROR });
export const toggleControllerSuccess = () => ({ type: TOGGLE_CONTROLLER_SUCCESS });

export const toggleControllerStatus = (payload) => ({ type: TOGGLE_CONTROLLER_STATUS, payload });
export const toggleControllerStatusError = () => ({ type: TOGGLE_CONTROLLER_STATUS_ERROR });
export const toggleControllerStatusSuccess = (payload) => ({ type: TOGGLE_CONTROLLER_STATUS_SUCCESS, payload });

export const setUpClick = (payload) => ({ type: SETUP_CLICK, payload });
