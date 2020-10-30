import application from '../../reducers/application';
import { updateState } from '../../actions/index';

describe('Application Reducer', () => {
  it('Should return IDLE by default', () => {
    expect(application(undefined, { type: 'NONE' })).toEqual('IDLE');
  });

  it('Should update the application state when receiving the action', () => {
    expect(application('', updateState('LOADING'))).toEqual('LOADING');
  });
});
