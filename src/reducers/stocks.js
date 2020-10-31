const stocks = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
      return [
        ...state,
        ...action.stocks,
      ];
    default:
      return state;
  }
};

export default stocks;
