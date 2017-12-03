import { createSelector } from 'reselect';

/**
 * Direct selector to the structure state domain
 */
const selectStructureDomain = () => (state) => state.get('structure');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Structure
 */

const makeSelectStructure = () => createSelector(
  selectStructureDomain(),
  (substate) => substate.toJS()
);

export default makeSelectStructure;
export {
  selectStructureDomain,
};
