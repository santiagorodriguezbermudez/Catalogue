import filterStocksByExchange from '../../filters/filterStocksByExchange';

describe('filterStocksByExchange', () => {
  const stocks = [
    {
      companyName: '1',
      exchange: 'NYSE',
    },
    {
      companyName: '2',
      exchange: 'XETRA',
    },
    {
      companyName: '3',
      exchange: 'NYSE',
    },
  ];

  it('should return an array with stocks filtered by exchange name', () => {
    expect(filterStocksByExchange(stocks, 'NYSE')).toEqual([
      {
        companyName: '1',
        exchange: 'NYSE',
      },
      {
        companyName: '3',
        exchange: 'NYSE',
      },
    ]);
  });

  it('should return the same array when the filter select All of the options', () => {
    expect(filterStocksByExchange(stocks, 'ALL')).toEqual(stocks);
  });
});
