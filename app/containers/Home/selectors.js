import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = () => (state) => state.get('home');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Home
 */

const makeSelectHome = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.toJS()
);
const makeSelectLoading = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('loading'),
);
const makeSelectError = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('error'),
);
const makeSelectControllers = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.getIn(['userData', 'controllers']),
);

export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectControllers,
};
