const stock = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_STOCK':
      return {
        ...action.stock,
        history: [],
      };
    case 'ADD_PRICE_TO_STOCK':
      return {
        ...state,
        history: action.history,
      };
    default:
      return state;
  }
};

export default stock;
