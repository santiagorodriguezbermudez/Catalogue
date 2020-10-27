const stock = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_STOCK':
      return {
        id: action.id,
      };
    default:
      return state;
  }
};

export default stock;
