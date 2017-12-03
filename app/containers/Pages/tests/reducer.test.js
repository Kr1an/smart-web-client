
import { fromJS } from 'immutable';
import pagesReducer from '../reducer';

describe('pagesReducer', () => {
  it('returns the initial state', () => {
    expect(pagesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
