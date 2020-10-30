import searchedStocksReducer from '../../reducers/searchedStocks';
import { searchedStocks } from '../../actions/index';

const mockSearchedStocks = [
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

describe('Searched Stocks Reducer', () => {
  it('Should return empty array by default', () => {
    expect(searchedStocksReducer(undefined, { type: 'NONE' })).toEqual([]);
  });

  it('Should update the application state when receiving the action', () => {
    expect(searchedStocksReducer('', searchedStocks(mockSearchedStocks))).toEqual(mockSearchedStocks);
  });
});
