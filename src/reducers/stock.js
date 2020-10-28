const stock = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_STOCK':
      return action.stock;
    default:
      return state;
  }
};

export default stock;
