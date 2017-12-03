import { takeLatest, takeEvery, call, put, select, all, fork } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_CONTROLLERS,
  TOGGLE_CONTROLLER,
  TOGGLE_CONTROLLER_STATUS,
  SETUP_CLICK,
} from './constants';
import {
  loadControllersError,
  loadControllersSuccess,
  toggleControllerError,
  toggleControllerSuccess,
  toggleControllerStatus,
  toggleControllerStatusError,
  toggleControllerStatusSuccess,
} from './actions';

import { makeSelectControllers } from './selectors';


export function* controllersData() {
  try {
    const controllers = yield call(request, `${window.BASE_URL}/list`);
    yield put(loadControllersSuccess(controllers));
    for (let i = 0; i < controllers.length; i += 1) {
      yield put(toggleControllerStatus(i));
    }
  } catch (e) {
    yield put(loadControllersError());
  }
}

export function* clickController(action) {
  const id = action.payload;
  try {
    yield call(request, `${window.BASE_URL}/toggle/${id}`);
    yield put(toggleControllerSuccess());
    yield put(toggleControllerStatus(id));
  } catch (e) {
    yield put(toggleControllerError());
  }
}
// Individual exports for testing
export function* toggleControllerSaga() {
  yield takeEvery(TOGGLE_CONTROLLER, clickController);
}

export function* defaultSaga() {
  yield takeLatest(LOAD_CONTROLLERS, controllersData);
}

export function* toggleStatus(action) {
  const id = action.payload;
  try {
    const res = yield call(request, `${window.BASE_URL}/status/${id}`);
    const controllers = yield select(makeSelectControllers());
    const newControllers = [...controllers];
    newControllers[id] = { ...controllers[id], status: res.status };
    yield put(toggleControllerStatusSuccess(newControllers));
  } catch (e) {
    yield put(toggleControllerStatusError());
  }
}

export function* toggleControllerStatusSaga() {
  yield takeLatest(TOGGLE_CONTROLLER_STATUS, toggleStatus);
}

export function* setUpClick(action) {
  const id = action.payload;
  yield call(request, `${window.BASE_URL}/setup/${id}`);
}

export function* setUpClickSaga() {
  yield takeEvery(SETUP_CLICK, setUpClick);
}

export default function* rootSaga() {
  yield [
    fork(defaultSaga),
    fork(toggleControllerSaga),
    fork(toggleControllerStatusSaga),
    fork(setUpClickSaga),
  ];
}
