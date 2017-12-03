import { createSelector } from 'reselect';

/**
 * Direct selector to the pagesNavigator state domain
 */
const selectPagesNavigatorDomain = () => (state) => state.get('pagesNavigator');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PagesNavigator
 */

const makeSelectPagesNavigator = () => createSelector(
  selectPagesNavigatorDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPagesNavigator;
export {
  selectPagesNavigatorDomain,
};
