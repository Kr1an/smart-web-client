import { createSelector } from 'reselect';
import { makeSelectLocationState } from 'containers/App/selectors';

const makeSelectLocationBeforeTransitionsState = () => createSelector(
  makeSelectLocationState(),
  (locationState) => locationState.locationBeforeTransitions,
);

const makeSelectPathnameState = () => createSelector(
  makeSelectLocationBeforeTransitionsState(),
  (locationBeforeTransitionsState) => locationBeforeTransitionsState && locationBeforeTransitionsState.pathname
);

export {
  makeSelectLocationBeforeTransitionsState,
  makeSelectPathnameState,
};
