import stocks from '../../reducers/stocks';
import { fetchStocks } from '../../actions/index';

const mockStocks = [
  {
    symbol: 'TestStock1',
    price: 1,
    companyName: 'TestStock1',
    exchange: 'NYSE',
    website: 'www.test.com',
    image: 'http:test.image.png',
  },
  {
    symbol: 'TestStock2',
    price: 1,
    companyName: 'TestStock2',
    exchange: 'NYSE',
    website: 'www.test2.com',
    image: 'http:test.image2.png',
  },
];

describe('Stocks Reducer', () => {
  it('Should return empty array by default', () => {
    expect(stocks(undefined, { type: 'NONE' })).toEqual([]);
  });

  it('Should update the application state when receiving the action', () => {
    expect(stocks('', fetchStocks(mockStocks))).toEqual(mockStocks);
  });
});
