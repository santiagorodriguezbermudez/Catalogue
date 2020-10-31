const searchedStocks = (state = [], action) => {
  switch (action.type) {
    case 'SEARCHED_STOCKS':
      return [...action.stocks];
    default:
      return state;
  }
};

export default searchedStocks;
