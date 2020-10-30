import stock from '../../reducers/stocks';
import { showStock } from '../../actions/index';

const mockStock = {
  symbol: 'TestStock1',
  price: 1,
  companyName: 'TestStock1',
  exchange: 'NYSE',
  website: 'www.test.com',
  image: 'http:test.image.png',
};

describe('Stock Reducer', () => {
  it('Should return empty object by default', () => {
    expect(stock(undefined, { type: 'NONE' })).toEqual({});
  });

  it('Should update the application state when receiving the action', () => {
    expect(stock('', showStock(mockStock))).toEqual(mockStock);
  });
});
