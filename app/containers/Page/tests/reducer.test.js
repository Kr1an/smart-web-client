
import { fromJS } from 'immutable';
import pageReducer from '../reducer';

describe('pageReducer', () => {
  it('returns the initial state', () => {
    expect(pageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
