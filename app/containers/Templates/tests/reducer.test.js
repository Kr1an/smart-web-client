
import { fromJS } from 'immutable';
import templatesReducer from '../reducer';

describe('templatesReducer', () => {
  it('returns the initial state', () => {
    expect(templatesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
