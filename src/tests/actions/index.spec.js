import {
  updateState,
  fetchStocks,
  searchedStocks,
  addPriceStock,
  filter,
  showStock,
} from '../../actions/index';

describe('Application Update State', () => {
  it('Should update the state of the application', () => {
    expect(updateState('TEST_STATE')).toEqual({
      type: 'UPDATE_STATE',
      newState: 'TEST_STATE',
    });
  });
});

const stocks = [{ symbol: 'testCase1' }, { symbol: 'testCase2' }];

describe('Fetch Stocks Action', () => {
  it('Should update the state of the application', () => {
    expect(fetchStocks(stocks)).toEqual({
      type: 'FETCH_STOCKS',
      stocks,
    });
  });
});

describe('Searched Stocks Action', () => {
  it('Should update the state of the application', () => {
    expect(searchedStocks(stocks)).toEqual({
      type: 'SEARCHED_STOCKS',
      stocks,
    });
  });
});

const priceHistory = [{ price: 2 }, { price: 4 }];

describe('Add price to stock action', () => {
  it('Should update the state of the application', () => {
    expect(addPriceStock(priceHistory)).toEqual({
      type: 'ADD_PRICE_TO_STOCK',
      history: priceHistory,
    });
  });
});

describe('Show Stock Action', () => {
  it('Should update the state of the application', () => {
    expect(showStock(stocks[0])).toEqual({
      type: 'SHOW_STOCK',
      stock: stocks[0],
    });
  });
});

describe('Filter Action', () => {
  it('Should update the state of the application', () => {
    expect(filter('testFilter')).toEqual({
      type: 'FILTER',
      label: 'testFilter',
    });
  });
});
