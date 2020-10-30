const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.label;
    default:
      return state;
  }
};

export default filter;
