import stock from '../../reducers/stock';
import { showStock, addPriceStock } from '../../actions/index';

const mockStock = {
  symbol: 'TestStock1',
  price: 1,
  companyName: 'TestStock1',
  exchange: 'NYSE',
  website: 'www.test.com',
  image: 'http:test.image.png',
  history: [],
};

const mockPrices = [
  {
    date: 'January 1 2020',
    price: 2,
  },
  {
    date: 'January 2 2020',
    price: 2.3,
  },
];

describe('Stock Reducer', () => {
  it('Should return empty object by default', () => {
    expect(stock(undefined, { type: 'NONE' })).toEqual({});
  });

  it('Should update the application state when receiving the action', () => {
    expect(stock('', showStock(mockStock))).toEqual(mockStock);
  });

  it('Should update the prices of the object', () => {
    expect(stock(mockStock, addPriceStock(mockPrices))).toEqual(
      {
        symbol: 'TestStock1',
        price: 1,
        companyName: 'TestStock1',
        exchange: 'NYSE',
        website: 'www.test.com',
        image: 'http:test.image.png',
        history: [
          {
            date: 'January 1 2020',
            price: 2,
          },
          {
            date: 'January 2 2020',
            price: 2.3,
          },
        ],
      },
    );
  });
});
