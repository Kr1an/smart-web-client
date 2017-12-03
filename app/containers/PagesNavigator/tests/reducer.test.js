
import { fromJS } from 'immutable';
import pagesNavigatorReducer from '../reducer';

describe('pagesNavigatorReducer', () => {
  it('returns the initial state', () => {
    expect(pagesNavigatorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
