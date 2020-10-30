import filterReducer from '../../reducers/application';
import { filter } from '../../actions/index';

describe('Filter Reducer', () => {
  it('Should return ALL by default', () => {
    expect(filterReducer(undefined, { type: 'NONE' })).toEqual('ALL');
  });

  it('Should update the application state when receiving the action', () => {
    expect(filterReducer('', filter('New York Exchange'))).toEqual('New York Exchange');
  });
});
